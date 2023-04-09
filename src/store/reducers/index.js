// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import category from './category'

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ category, menu });

export default reducers;
