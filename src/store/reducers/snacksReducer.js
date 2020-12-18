import {ADD_SNACK, REMOVE_SNACK} from "../actionTypes";

const initialState = [];

const snacksReducer = (state=initialState, action) => {
	switch(action.type){
		case ADD_SNACK:
			return [...state, action.data]
		case REMOVE_SNACK:
			return state.filter(item => item.id !== action.id);
		default:
			return state;
	}
}

export default snacksReducer;