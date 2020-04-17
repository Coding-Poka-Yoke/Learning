import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import EmployeeList from './employee-list'

export default class EmployeeLayout extends Component {

  render () {
    return (
      <div className='container-fluid'>
        <div >
          <div className='col-md-12'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'><a href='/'>Home</a></li>
                <li className='breadcrumb-item active' aria-current='page'>Employee</li>
              </ol>
            </nav>
          </div>
          <div className='flex-row'>
            <div className='col-md-3' />
            <div className='col-md-3' />
            <div className='col-md-2' />
            <div className='col-md-3'>
              <div>
                <Link className='mr-1' to={'/employee/create'} role='button'>
                  <span className='glyphicon glyphicon-plus' />Add
              </Link>
              </div>
            </div>
          </div>
          <EmployeeList  />
        </div>
      </div>
    )
  }
}
