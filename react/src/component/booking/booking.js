import React,{ Component} from 'react';
import Configuration from '../../routes'
import moment from 'moment'
import { connect } from "react-redux";
import {getEmployees} from '../../actions/employee-action'

const slots ={
  "5":[{"1":[{"id":"P51001","isBooked":"true"},{"id":"P51002","isBooked":"false"},{"id":"P51003","isBooked":"false"},{"id":"P51004","isBooked":"false"},{"id":"P51005","isBooked":"false"}]}],
  "10":[{"5":[{"id":"P1050001","isBooked":"false"},{"id":"P1050002","isBooked":"false"},{"id":"P1050003","isBooked":"false"},{"id":"P1050004","isBooked":"false"},{"id":"P1050005","isBooked":"false"}]},
  {"7":[{"id":"P1070001","isBooked":"false"},{"id":"P1070002","isBooked":"false"},{"id":"P1070003","isBooked":"false"},{"id":"P1070004","isBooked":"false"},{"id":"P1070005","isBooked":"false"}]}]
}

const mapStateToProps = (state) => {
  return {
    employees : state.employee.employees
  }
}

 class BookingLayout extends Component{

  constructor(props){
    super(props);
      this.initialState = {
      block: '',
      floor:'',
      slotId:'',
      employee:'',
      bookedDateTime:''
    };
    this.handleBLock = this.handleBLock.bind(this)
    this.handleFloor = this.handleFloor.bind(this)
    this.handleEmployee = this.handleEmployee.bind(this)

    this.state = this.initialState
    this.floors=[];
    this.availableSlots=[];
    this.config = new Configuration()
  }

  
  componentDidMount() {
  this.props.dispatch(getEmployees());
  }


  getSlots(){
    let slotId=0;
    if(this.availableSlots.length>0){
       slotId=this.availableSlots[Math.floor(Math.random() * this.availableSlots.length)].id
      console.log("val",slotId);
    }
    return slotId
  }


  handleEmployee(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }
  updateState(name,value){
    this.setState({
      [name]: value
    })
  }
  
  
  handleBLock (event) {
    const name = event.target.name
    const value = event.target.value
    this.updateState(name,value)
   this.floors=[]
   this.availableSlots=[]
   slots[value].forEach((fl,j)=>{
      Object.keys(fl).map(floor=>{
        this.floors.push(floor);
      })})
      this.availableSlots=slots[value]["0"][this.floors[0]].filter(ob => ob.isBooked ==="false")
      this.updateState("floor",this.floors[0]);
  }

  handleFloor (event) {
    const name = event.target.name
    const value = event.target.value    
    this.availableSlots=[]
    this.updateState(name,value)
    this.availableSlots=slots[this.state.block]["1"][value].filter(ob => ob.isBooked ==="false")
}
handleBooking(){
  console.log("You have booked a slot:", JSON.stringify(this.state));
}

handleFormSubmit = event => {
    event.preventDefault();
    var id=this.getSlots();
    this.setState({
      slotId: id,
      bookedDateTime:moment()
    },() => {
      this.handleBooking()
    })
};


render(){
  return(
    <div class="container-fluid">
      <div className='col-md-12'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><a href='/'>Home</a></li>
            <li className='breadcrumb-item active' aria-current='page'>Bookings</li>
          </ol>
        </nav>
      </div>
      <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mb-5">
            <h2 className="mb-4">Booking</h2>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="Block">Block</label> 
                <select name="block"
                  value={this.state.block}
                  onChange={this.handleBLock}
                  className="form-control"
                  id="blook">
                    <option value='' disabled="true"></option>
                    { Object.keys(slots).map((block,i)=>
                     <option key={i} value={block}>{block}</option>)}
                </select>                 
              </div>
              <div className="form-group"  hidden={this.state.block === ''}>
                <label htmlFor="Floor">Floor</label>
                <select name="floor"
                  value={this.state.floor}
                  onChange={this.handleFloor}
                  className="form-control"
                  id="floor">
                    {this.floors.map((floor,i)=>
                     <option key={i} value={floor}>
                       {floor}</option>)}
                       }
                </select>                 
              </div>
              <div className="form-group"  hidden={this.state.floor === ''}>
                <label htmlFor="Employee">Employee</label> 
                <select name="employee"
                  value={this.state.employee}
                  onChange={this.handleEmployee}
                  className="form-control"
                  id="employee">
                    <option value='' disabled="true"></option>
                    {this.props.employees.map((emp, index) => 
                     <option key={index} value={emp.id}>{emp.id},{emp.lastName},{emp.firstName}</option>)}
                </select>                 
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.state.employee === ''}>
                Book
              </button>
            </form>
          </div>
        </div>
        

     
     



    </div>


  );
}

}

export default connect(mapStateToProps)(BookingLayout);

