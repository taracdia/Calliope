import { TRACK_CHANGE } from "../constants";

export function changeTrack(track) {
	return {
		type: TRACK_CHANGE,
		payload: track,
	};
}
