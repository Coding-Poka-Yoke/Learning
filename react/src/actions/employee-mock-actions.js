import {ADD_EMPLOYEE,EDIT_EMPLOYEE,DELETE_EMPLOYEE,FETCH_EMPLOYEES_BEGIN,FETCH_EMPLOYEES,FETCH_EMPLOYEES_FAILURE} from '../constants/constants'

export function addEmployee(payload){
  return function(dispatch) {
   saveEmployee(dispatch,ADD_EMPLOYEE,payload)
 };
};

export function getEmployees() {
    return function(dispatch) {
            return dispatch({ type: FETCH_EMPLOYEES, payload: JSON.parse(localStorage.getItem('employees'))});
         };
  }

export function editEmployee(payload){
    return function(dispatch) {
     saveEmployee(dispatch,EDIT_EMPLOYEE,payload)
   };
  };

  export function deleteEmployee(id){
    return function(dispatch) {
            
          console.log('Employee with id: ' + id + ' deleted successfully')
          dispatch({ type: DELETE_EMPLOYEE, payload: id });

        }
  }

function saveEmployee(dispatch,type,payload){
      console.log("save employee: actioonType"+type);
      console.log("save employee: payload"+JSON.stringify(payload));
      return dispatch({ type: type, payload: payload });
  }

//redux-saga
  //export function getData(url) {
    //return { type: "FETCH_REQUESTED", payload: { url } };
  //}

  export const fetchEmployeesBegin = () => ({
    type: FETCH_EMPLOYEES_BEGIN
  });
  
  export const fetchEmployeesSuccess = employees => ({
    type: FETCH_EMPLOYEES,
    payload: { employees }
  });
  
  export const fetchEmployeesFailure = error => ({
    type: FETCH_EMPLOYEES_FAILURE,
    payload: { error }
  });