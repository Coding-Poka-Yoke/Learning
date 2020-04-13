import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Header from './component/header/headerLayout'

import './App.css'

class App extends React.Component {
  render () {
	    return (
  <div>
    <	Header />
    <div className='row'>
      <div className='col-3'>
        <div className='list-group'>
          <a className='btn btn-dark' href='/booking' role='button'>Booking</a>
        </div>
      </div>
      <div className='col-3'>
        <div className='list-group'>
          <a className='btn btn-dark' href={'/employee/list'} role='button'>Employees</a>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
export default App
