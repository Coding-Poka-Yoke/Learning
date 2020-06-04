import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import axios from 'axios'
import EmployeeLayout from './component/employee/employee-layout'
import BookingLayout from './component/booking/booking'

import * as serviceWorker from './serviceWorker'
import CreateEmployee from './component/employee/employee-form'

import {Provider} from 'react-redux';
import store from './store/store'


import test from './test'
const routing = (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh' crossOrigin='anonymous' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />


    </head>
    <body>
      <Provider store={store}>
        <Router>
          <div className='container-fluid'>

            <div>
              <Route exact path='/' component={App} />
              <Route exact path='/employee/list' component={EmployeeLayout} />
              <Route path='/booking' component={BookingLayout} />
              <Route path='/employee/create' component={CreateEmployee} />
              <Route path='/employee/edit/:id' component={CreateEmployee} />

            </div>
          </div>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' />

          <script src='https://code.jquery.com/jquery-3.4.1.slim.min.js' integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n' crossOrigin='anonymous' />
          <script src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo' crossOrigin='anonymous' />
          <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6' crossOrigin='anonymous' />

        </Router>
      </Provider>
    </body>
  </html>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
