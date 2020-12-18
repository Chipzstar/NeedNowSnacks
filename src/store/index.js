import { combineReducers } from "redux";
import { firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import snacksReducer from "./reducers/snacksReducer";

export const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	snacks: snacksReducer,
});