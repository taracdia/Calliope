import { createStore } from "redux";
import TrackReducer from "./Track";

const store = createStore(TrackReducer);

export default store;
