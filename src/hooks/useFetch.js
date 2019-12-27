import {useEffect, useReducer, useCallback} from 'react';
import axios from '../config/axios';
import reducer, {initialState} from '../reducers/fetchReducer';
import {
  fetchStart,
  fetchFinish,
  fetchError,
} from '../actionCreators/fetchActionCreator';

export default function useFetch(url, initialData, ...deps) {
  const [state, dispatch] = useReducer(reducer, initialState(initialData));
  let isCancel = false;

  const fetch = useCallback(async () => {
    try {
      dispatch(fetchStart());

      const response = await axios.get(url);
      const data = await response.data.results;
      if (!isCancel) {
        dispatch(fetchFinish(data));
      }
    } catch (error) {
      if (!isCancel) {
        dispatch(fetchError(error));
      }
    }
  }, [...deps]);

  useEffect(() => {
    fetch();

    return () => {
      isCancel = true;
    };
  }, [fetch]);

  return {...state, fetch};
}
