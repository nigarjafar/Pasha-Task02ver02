import { combineReducers } from "redux";

const usersLoad = (users = [], action) => {
	if (action.type === "USERS_LOADED") {
		return action.payload;
	}

	return users;
};

const postsLoad = (posts = [], action) => {
	if (action.type === "POSTS_LOADED") {
		return action.payload;
	}

	return posts;
};

export default combineReducers({
	users: usersLoad,
	posts: postsLoad
});
