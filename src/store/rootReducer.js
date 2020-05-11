import { combineReducers } from 'redux';
import statuses from '../app/reducer';
import backpackList from '../app/backpackList/reducer';

export default combineReducers({
  statuses,
  backpackList,
});
