import {ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEES,FETCH_EMPLOYEES_FAILURE} from '../constants/constants'

let initialState={
    employees:[{"id":12,"firstName":"venk","lastName":"knlk","userName":"jkkn","email":"","contactNo":"","gender":"male","tier":"3"},
    {"id":28,"firstName":"sudharshan","lastName":"Atreya","userName":"sjatreya","email":"sjatreya@gmail.com","contactNo":"123456789","gender":"male","tier":"1"}]
            ,
    error:null,
    isLoading:false
};
localStorage.clear();
if( localStorage.getItem("employees") === null)
localStorage.setItem('employees',JSON.stringify(initialState));
else
initialState = JSON.parse(localStorage.getItem('employees'));

function employeeReducer(state=initialState,action){
   console.log("Reducer-Action:"+action.type)
   console.log("Reducer-Payload:"+JSON.stringify(action.payload))

   switch(action.type){
       case ADD_EMPLOYEE:
           //return {...state,employees:[...state.employees,action.payload]};
           const createEmp = {...state,employees:[...state.employees,action.payload]};
           localStorage.setItem('employees',JSON.stringify(createEmp));
           return createEmp

        case FETCH_EMPLOYEES:
            return state// {...state,employees:action.payload};
        case EDIT_EMPLOYEE:
            //return{...state,employees:[...state.employees,action.payload]}
           const retVal= state.employees.map((employee) => {
                if(employee.id === action.payload.id)
                {
                    console.log("id"+action.payload.id);
                    employee=action.payload
                }
                return employee;
            })
            
            const updateState = {...state,employees:retVal}            
            localStorage.setItem('employees',JSON.stringify(updateState));
            return updateState;

        case DELETE_EMPLOYEE:
           // const filteredEmployees = state.employees.filter(emp=>emp.id!==action.payload)
            //return{...state,employees:[...filteredEmployees,action.payload]}

            const remainingEmployees = state.employees.filter(emp=>emp.id!==action.payload)
            const filteredEmployees={...state,employees:remainingEmployees}
            localStorage.setItem('employees',JSON.stringify(filteredEmployees));
            return filteredEmployees
            
        case FETCH_EMPLOYEES_FAILURE:
             console.log("fectch failed");
             return state          
        default:
            return state;
 
   }
}

export default employeeReducer;