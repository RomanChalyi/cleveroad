import { LOADING_START } from './constant';

const statuses = (state = {}, action) => {
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
