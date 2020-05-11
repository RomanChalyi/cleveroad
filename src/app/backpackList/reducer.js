import { LOAD_BACKPACK_RESULT } from './constants';

const backpackList = (state = [], action) => {
  switch (action.type) {
    case LOAD_BACKPACK_RESULT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default backpackList;
