let counter = 0;

export default store => next => action => {
	counter++;
	console.log("count:", counter);
	next(action);
};
