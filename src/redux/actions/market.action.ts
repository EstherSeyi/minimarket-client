import request from '../../utils/request';
import {AppDispatch} from '../../store';

import {setLoading, setError, setErrorMessage} from './login.action';

export const setMarkets = (payload: any): {type: string; payload: any} => ({
  type: 'SET_MARKETS',
  payload,
});

const marketBoundActionCreator = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    //API Call
    const response = await request.get('/market');

    dispatch(setMarkets(response.data.payload));

    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      dispatch(setErrorMessage(error.response.data.message));
    } else if (error.request) {
      dispatch(setErrorMessage('Please Try again'));
    } else {
      dispatch(setErrorMessage('Process Failed!'));
    }
    // console.log(error.config);
    dispatch(setLoading(false));
  }
};

export const deleteMarkets = (ids: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const markets = [...ids];

    //API Call
    const response = await request.delete('/market', {
      headers: {},
      data: {
        markets,
      },
    });

    dispatch(setLoading(false));

    window.location.reload();
    return response.data;
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      dispatch(setErrorMessage(error.response.data.message));
    } else if (error.request) {
      dispatch(setErrorMessage('Please Try again'));
    } else {
      dispatch(setErrorMessage('Process Failed!'));
    }
    // console.log(error.config);
    dispatch(setLoading(false));
  }
};

export const createMarket = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    await request.post('/market', data);

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      dispatch(setErrorMessage(error.response.data.message));
    } else if (error.request) {
      dispatch(setErrorMessage('Please Try again'));
    } else {
      dispatch(setErrorMessage('Process Failed!'));
    }
    // console.log(error.config);
    dispatch(setLoading(false));
  }
};

export const updateMarket = (data: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));

    await request.put('/market', data);

    dispatch(setLoading(false));

    window.location.reload();
  } catch (error) {
    dispatch(setError(true));

    if (error.response) {
      dispatch(setErrorMessage(error.response.data.message));
    } else if (error.request) {
      dispatch(setErrorMessage('Please Try again'));
    } else {
      dispatch(setErrorMessage('Process Failed!'));
    }
    // console.log(error.config);
    dispatch(setLoading(false));
  }
};

export default marketBoundActionCreator;
