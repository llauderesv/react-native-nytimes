export const FETCH_START = 'FETCH_START';
export const FETCH_FINISH = 'FETCH_FINISH';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchFinish = (data = null) => ({
  type: FETCH_FINISH,
  payload: data,
});

export const fetchError = (error = '') => ({
  type: FETCH_ERROR,
  payload: error,
});
