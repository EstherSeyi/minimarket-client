import axios from 'axios';

import {AppDispatch} from '../../store';

import {setLoading, setError, setErrorMessage} from './login.action';

export const setImages = (payload: any): {type: string; payload: any} => ({
  type: 'SET_IMAGES',
  payload,
});

const uploadImageActionCreator = (credentials: string | Blob) => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch(setLoading(true));

    const formData = new FormData();
    formData.append('upload_preset', 'esthercloud');
    formData.append('file', credentials);
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dlwtq11kl/image/upload',
      formData,
    );

    dispatch(setLoading(false));

    return res.data.secure_url;
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

export default uploadImageActionCreator;
