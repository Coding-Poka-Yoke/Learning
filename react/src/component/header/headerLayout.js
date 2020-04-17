import React, { Component } from 'react'
export default class Header extends React.Component {

  render () {
    return (
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Company portal - Parking Slot Booking</h1>
          <p className='lead'>This portal is useful for the employees to get car parking slots from admin</p>
        </div>
      </div>

    )
  }
}
