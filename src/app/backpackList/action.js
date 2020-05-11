import { LOAD_BACKPACK_RESULT } from './constants';
import { BackpackDB } from '../../firebaseConfig';
import { loadingStart, loadingEnd, showErrorMessage } from '../action';

export const loadBackpacks = () => async (dispatch) => {
  try {
    dispatch(loadingStart());
    const querySnapshot = await BackpackDB.get();
    const Backpacks = [];
    querySnapshot.docs.map((documentSnapshot) =>
      Backpacks.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
    );
    dispatch(loadingEnd());
    return dispatch({ type: LOAD_BACKPACK_RESULT, payload: Backpacks });
  } catch (e) {
    dispatch(loadingEnd());
    dispatch(showErrorMessage('Oops, something went wrong'));
  }
};
