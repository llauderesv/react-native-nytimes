import {
  FETCH_START,
  FETCH_FINISH,
  FETCH_ERROR,
} from '../actionCreators/fetchActionCreator';

export const initialState = (data = null) => ({
  data,
  loading: false,
  error: '',
});

export default function reducer(state = initialState([]), action) {
  switch (action.type) {
    case FETCH_START:
      return {...state, loading: true, error: ''};
    case FETCH_FINISH:
      return {...state, data: action.payload, loading: false, error: ''};
    case FETCH_ERROR:
      return {
        ...state,
        data: state.data,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
