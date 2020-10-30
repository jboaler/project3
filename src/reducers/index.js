import taskReducer from "./tasks"
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  tasks: taskReducer
})

export default allReducers;