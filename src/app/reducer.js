import { LOADING_START } from './constant';

const initialState = { isLoading: false, isAuthorization: false };

const statuses = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, isLoading: true };
    }
    default: {
      return state;
    }
  }
};

export default statuses;
