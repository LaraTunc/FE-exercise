import { combineReducers } from 'redux';
import itemsReducer from './items-reducer';
import cartReducer from './cart-reducer';

export default combineReducers({
	cartReducer,
	itemsReducer,
});
