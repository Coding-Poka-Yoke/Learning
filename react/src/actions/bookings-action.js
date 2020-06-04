import {BOOKING_CONFIRMED,FETCH_SLOTS} from '../constants/constants'

export function confirmBooking(payload){
  return function(dispatch) {
    console.log("bookSlot");
    return dispatch({ type: BOOKING_CONFIRMED, payload: payload });
  };
};

export function getSlots() {
    return function(dispatch) {
      console.log("getSlots");
      return dispatch({ type: FETCH_SLOTS, payload: JSON.parse(localStorage.getItem('slots'))});     
         };
  }
