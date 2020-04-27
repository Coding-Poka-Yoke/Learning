import React from 'react'
import Configuration from '../../routes'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
//import {getEmployees,deleteEmployee} from '../../actions/employee-action'
//This is to test api without elasticsearch
import {getEmployees,deleteEmployee} from '../../actions/employee-mock-actions'

const mapStateToProps = (state) => {
  return {
    employees : state.employee.employees
  }
}

 class EmployeeList extends React.Component {
  constructor (props) {
    super(props)
    this.config = new Configuration()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    //redux-saga
    //this.props.dispatch(getData("http://localhost:9200/employee/_search"));
    this.props.dispatch(getEmployees());
  }

  handleDelete (id) {
    console.log('Delete called')
    this.props.dispatch(deleteEmployee(id));
  }

  render () {
    return (
      <div className='col-md-10'>
        <table className='table table-hover'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.length > 0 ? (
          this.props.employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.userName}</td>
              <td>{emp.email}</td>
              <td>
                <Link type='button' className='btn btn-default btn-sm mr-3' to={{
                  pathname: `/employee/edit/${emp.id}`,
                  state: emp
                }}>
                  <span className='glyphicon glyphicon-pencil' style={{color: 'orange'}} />Edit
                </Link>
                <button type='button' className='btn btn-default btn-sm' onClick={() => { this.handleDelete(emp.id) }} >
                  <span className='glyphicon glyphicon-trash' style={{color: 'red'}} />Delete
                </button>
              </td>
            </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No Employees</td>
        </tr>
      )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default connect(mapStateToProps)(EmployeeList);
