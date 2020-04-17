import {ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEES} from '../constants/constants'

const initialState={
    employees:[],
    error:null,
    isLoading:false
};

function rootReducer(state=initialState,action){
   console.log("Reducer-Action:"+action.type)
   console.log("Reducer-Payload:"+JSON.stringify(action.payload))

   switch(action.type){
       case ADD_EMPLOYEE:
           return {...state,employees:[...state.employees,action.payload]};
        case FETCH_EMPLOYEES:
            return {...state,employees:action.payload};
        case EDIT_EMPLOYEE:
            return{...state,employees:[...state.employees,action.payload]}
        case DELETE_EMPLOYEE:
            const filteredEmployees = state.employees.filter(emp=>emp.id!==action.payload)
            return{...state,employees:[...filteredEmployees,action.payload]}
        default:
            return state;
 
   }
}

export default rootReducer;