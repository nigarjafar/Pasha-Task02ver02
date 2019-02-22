import { POSTS_FETCHED } from "../actions/types";

export default (state = [], action) => {
	switch (action.type) {
		case POSTS_FETCHED:
			return action.payload;
		default:
			return state;
	}
};
