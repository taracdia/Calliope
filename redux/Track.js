export const CHANGE_TRACK = "CHANGE_TRACK";

const initialState = [];

const trackReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TRACK:
			return state; //TODO: set up
		default:
			return state;
	}
};

export default trackReducer;
