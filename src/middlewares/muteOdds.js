let counter = 0;

export default store => next => action => {
	counter++;
	if (counter % 2 === 0) next(action);
	else console.log("omitting ", counter);
};
