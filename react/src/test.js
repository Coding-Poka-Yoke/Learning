import store from './store/store';
import {addEmployee,getEmployees} from './actions/employee-action';


window.store=store;
window.addEmployee=addEmployee;
window.getEmployees=getEmployees