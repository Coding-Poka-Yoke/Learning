import {ADD_EMPLOYEE,EDIT_EMPLOYEE,DELETE_EMPLOYEE,FETCH_EMPLOYEES_BEGIN,FETCH_EMPLOYEES,FETCH_EMPLOYEES_FAILURE} from '../constants/constants'
import Configuration from '../routes'

export function addEmployee(payload){
  return function(dispatch) {
   saveEmployee(dispatch,ADD_EMPLOYEE,payload)
 };
};

export function getEmployees() {
    return function(dispatch) {
            return fetch(new Configuration().EMPLOYEE_ROOT_URL + '/_search')
            .then(response => response.json())
            .then(result => {
                const retVal=[]
                result.hits.hits.map(h => retVal.push(h._source)) 
                console.log("retVal"+JSON.stringify(retVal))
                dispatch({ type: FETCH_EMPLOYEES, payload: retVal });
            }).catch(error=>{
              console.log(error);
            });
         };
  }

export function editEmployee(payload){
    return function(dispatch) {
     saveEmployee(dispatch,EDIT_EMPLOYEE,payload)
   };
  };

  export function deleteEmployee(id){
    return function(dispatch) {
        return fetch(new Configuration().EMPLOYEE_ROOT_URL + '/_doc/' + id, {
          method: 'delete'
        })
        .then(response => {
          if (!response.ok) {
            console.error('HTTP error, status = ' + response.status)
            return// hrow new Error('HTTP error, status = ' + response.status)
          }
          console.log('Employee with id: ' + id + ' deleted successfully')
          dispatch({ type: DELETE_EMPLOYEE, payload: id });

        })
        .catch(error => {
          console.error('Error' + error)
        })
        }
  }

function saveEmployee(dispatch,type,payload){
      console.log("save employee: actioonType"+type);
      console.log("save employee: payload"+JSON.stringify(payload));

    return fetch(new Configuration().EMPLOYEE_ROOT_URL + '/_doc/' + payload.id, {
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    .then(response => {
      console.log("status",response.status)
      if (response.status ===201 || response.status ===200 ) {
           dispatch({ type: type, payload: payload });
           console.log('created successfully: ');
           return
      }
        console.error('HTTP error, status = ' + response.status)
        return// hrow new Error('HTTP error, status = ' + response.status)
    })
     .catch(error => {
       console.error('Error' + error)
     })
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