import jsonplaceholder from "../apis/jsonplaceholder";
import { USERS_FETCHED, USER_FETCHED, POSTS_FETCHED } from "./types";
import _ from "lodash";

export const fetchUsers = () => async dispatch => {
	const result = await jsonplaceholder.get("/users");

	dispatch({
		type: USERS_FETCHED,
		payload: result.data
	});
};

export const fetchUser = id => dispatch => memoizeFetchUser(id, dispatch);

const memoizeFetchUser = _.memoize(async (id, dispatch) => {
	console.log("user" + id);
	const result = await jsonplaceholder.get(`/users/${id}`);

	dispatch({
		type: USER_FETCHED,
		payload: result.data
	});
});

export const fetchPosts = () => async dispatch => {
	console.log("posts");
	const result = await jsonplaceholder.get("/posts");

	dispatch({
		type: POSTS_FETCHED,
		payload: result.data
	});
};
