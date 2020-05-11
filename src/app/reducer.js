import {
  LOADING_START,
  LOADING_END,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  SIGN_IN_SUCCESS,
} from './constants';

const initialState = {
  isLoading: false,
  userEmail: false,
  isError: false,
  message: '',
  showMessage: false,
};

const statuses = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, isLoading: true };
    }
    case LOADING_END: {
      return { ...state, isLoading: false };
    }
    case SHOW_ERROR_MESSAGE: {
      return { ...state, isError: true, message: action.message };
    }
    case HIDE_ERROR_MESSAGE: {
      return { ...state, isError: false, message: '' };
    }
    case SHOW_MESSAGE: {
      return { ...state, showMessage: true, message: action.message };
    }
    case HIDE_MESSAGE: {
      return { ...state, showMessage: false, message: '' };
    }
    case SIGN_IN_SUCCESS: {
      return { ...state, userEmail: action.email };
    }
    default: {
      return state;
    }
  }
};

export default statuses;
