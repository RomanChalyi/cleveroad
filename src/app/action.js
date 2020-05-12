import {
  LOADING_START,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  LOADING_END,
  SIGN_IN_SUCCESS,
} from './constants';
import { signIn, signUp, BackpackDB } from '../firebaseConfig';
import app from 'firebase/app';

export const loadingStart = () => ({ type: LOADING_START });
export const loadingEnd = () => ({ type: LOADING_END });

export const showErrorMessage = (message) => ({ type: SHOW_ERROR_MESSAGE, message });
export const hideErrorMessage = () => ({ type: HIDE_ERROR_MESSAGE });
export const showMessage = (message) => ({ type: SHOW_MESSAGE, message });
export const hideMessage = () => ({ type: HIDE_MESSAGE });
export const signInSuccess = (email) => ({ email, type: SIGN_IN_SUCCESS });

export const userSignIn = (email, password, history) => async (dispatch) => {
  try {
    dispatch(loadingStart());
    await signIn(email, password);
    const { currentUser } = app.auth();
    dispatch(loadingEnd());
    history.push('/');
    return dispatch(signInSuccess(currentUser.email));
  } catch (e) {
    dispatch(loadingEnd());
    return dispatch(showErrorMessage(e.message));
  }
};

export const userSignUp = (email, password) => async (dispatch) => {
  try {
    dispatch(loadingStart());
    await signUp(email, password);
    dispatch(loadingEnd());
    return dispatch(showMessage('You have successfully registered'));
  } catch (e) {
    dispatch(loadingEnd());
    return dispatch(showErrorMessage(e.message));
  }
};

export const addProduct = (backpackData, history) => async (dispatch) => {
  try {
    dispatch(loadingStart());

    await BackpackDB.doc().set(backpackData);

    history.push('/');

    return dispatch(loadingEnd());
  } catch (e) {
    dispatch(loadingEnd());
    dispatch(showErrorMessage('Oops, something went wrong'));
  }
};
