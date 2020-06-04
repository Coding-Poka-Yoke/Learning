import {BOOKING_CONFIRMED,FETCH_SLOTS} from '../constants/constants'

let initialState={
    slots:{
        "5":[{"1":[{"id":"P51001","isBooked":"true"},{"id":"P51002","isBooked":"false"},{"id":"P51003","isBooked":"false"},{"id":"P51004","isBooked":"false"},{"id":"P51005","isBooked":"false"}]}],
        "10":[{"5":[{"id":"P1050001","isBooked":"false"},{"id":"P1050002","isBooked":"false"},{"id":"P1050003","isBooked":"false"},{"id":"P1050004","isBooked":"false"},{"id":"P1050005","isBooked":"false"}]},
        {"7":[{"id":"P1070001","isBooked":"false"},{"id":"P1070002","isBooked":"false"},{"id":"P1070003","isBooked":"false"},{"id":"P1070004","isBooked":"false"},{"id":"P1070005","isBooked":"false"}]}]},
    booked:[]
};

//sessionStorage.clear();
if( sessionStorage.getItem("slots") === null)
sessionStorage.setItem('slots',JSON.stringify(initialState));
else
initialState = JSON.parse(sessionStorage.getItem('slots'));

function bookingReducer(state=initialState,action){
   console.log("Reducer-Action:"+action.type)
   console.log("Reducer-Payload:"+JSON.stringify(action.payload))

   switch(action.type){
       case BOOKING_CONFIRMED:
           //return {...state,employees:[...state.employees,action.payload]};
          //let val=[];
          console.log("book"+JSON.stringify(state.booked));
          
          //val.push(action.payload)
         // console.log("action.paylo"+JSON.stringify(action.payload));
         // const retVal=state.booked.push(action.payload)
          //val.push(state.booked)

          //console.log("val"+val.length+"--"+JSON.stringify(val));

          const data ={...state,booked:[...state.booked,action.payload]}       

         sessionStorage.setItem('slots',JSON.stringify(data));
         return data    

        case FETCH_SLOTS:            
            return state// {...state,employees:action.payload};
        default:
            return state;
 
   }
}

export default bookingReducer;