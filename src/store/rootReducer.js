import { combineReducers } from 'redux';
import statuses from '../app/reducer';
import productList from '../app/productList/reducer';

export default combineReducers({ statuses, productList });
