import { loadingStart, loadingEnd, showErrorMessage } from '../action';
import { BackpackDB } from '../../firebaseConfig';

export const editProduct = (data, history) => async (dispatch) => {
  try {
    const { pathname } = history.location;
    const id = pathname.slice(6);
    dispatch(loadingStart());
    await BackpackDB.doc(id).update(data);
    history.push('/');
    return dispatch(loadingEnd());
  } catch (e) {
    dispatch(loadingEnd());
    dispatch(showErrorMessage('Oops, something went wrong'));
  }
};
