import jsonplaceholder from "../apis/jsonplaceholder";

export const usersLoad = () => async dispatch => {
	const result = await jsonplaceholder.get("/users");

	dispatch({
		type: "USERS_LOADED",
		payload: result.data
	});
};

export const postsLoad = () => async dispatch => {
	const result = await jsonplaceholder.get("/posts");

	dispatch({
		type: "POSTS_LOADED",
		payload: result.data
	});
};
