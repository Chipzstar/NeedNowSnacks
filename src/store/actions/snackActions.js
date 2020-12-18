import { ADD_SNACK, REMOVE_SNACK} from "../actionTypes";

export const addSnack = snack => ({
	type: ADD_SNACK,
	data: snack
})

export const removeSnack = id => ({
	type: REMOVE_SNACK,
	id
})


