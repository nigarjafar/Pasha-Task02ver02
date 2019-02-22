import { USERS_FETCHED, USER_FETCHED } from "../actions/types";

export default (state = [], action) => {
	switch (action.type) {
		case USERS_FETCHED:
			return action.payload;
		case USER_FETCHED: {
			return [...state, action.payload];
		}
		default:
			return state;
	}
};
