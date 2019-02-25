export default store => next => action => {
	next(action);
	next(action);
};
