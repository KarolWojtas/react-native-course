//@flow
import { Place } from "../../App";
type State = {
  places: Array<Place>,
  selectedPlace: Place
};
const INITIAL_STATE = {
  places: [],
  selectedPlace: null
};
const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default mainReducer;
