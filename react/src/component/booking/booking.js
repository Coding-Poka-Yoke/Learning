import React,{ Component} from 'react';
import Configuration from '../../routes'
import moment from 'moment'
import { connect } from "react-redux";
import {getEmployees} from '../../actions/employee-action'
import {confirmBooking,getSlots} from '../../actions/bookings-action'

const mapStateToProps = (state) => {
  return {
    employees : state.employee.employees,
    slots : state.booking.slots,
    booked:state.booking.booked
  }
}
const mapDispatchToProps = dispatch => {
  return {
    confirmBooking: (data) => dispatch(confirmBooking(data)),
    dispatch
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
      bookedDateTime:'',
      isBooked:false
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
  this.props.dispatch(getSlots());

  }


  getSlot(){
    let slotId=0;
    
    if(this.availableSlots.length>0 ){
      if(this.props.booked.length>0){

        for(let bk of this.props.booked){
          console.log("bk id"+bk.slotId);
          
          this.availableSlots.filter(slot=> {
            console.log("slot id"+slot.id);
            return slot.id !== bk.slotId;
          })
        }
      }
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
   this.props.slots[value].forEach((fl,j)=>{
      Object.keys(fl).map(floor=>{
        this.floors.push(floor);
      })})
      this.availableSlots=this.props.slots[value]["0"][this.floors[0]].filter(ob => ob.isBooked ==="false")
      this.updateState("floor",this.floors[0]);
  }

  handleFloor (event) {
    const name = event.target.name
    const value = event.target.value    
    this.availableSlots=[]
    this.updateState(name,value)
    this.availableSlots=this.props.slots[this.state.block]["1"][value].filter(ob => ob.isBooked ==="false")
}
handleBooking(){
  console.log("You have booked a slot:", JSON.stringify(this.state));
  this.props.confirmBooking(this.state);
}

handleFormSubmit = event => {
    event.preventDefault();
    var id=this.getSlot();
    this.setState({
      slotId: id,
      bookedDateTime: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSS'),
      isBooked:true
    },() => {
      this.handleBooking()
    })
};


render(){
  return(
    <div className="container-fluid">
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
                    <option value='' disabled={true}></option>
                    { Object.keys(this.props.slots).map((block,i)=>
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
        

      <div className="card border-dark mb-3 col-md-8 bg-light offset-md-3" hidden={this.state.isBooked === false}>
        <div className="card-header text-white bg-dark">
        Parking Slot Details
        </div>
        <div className="card-body">
          <div className="row offset-md-1">
            <div className="col-md-4">
              <h6 className="card-subtitle mb-2 text-muted">Block Number : {this.state.block}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Floor Number : {this.state.floor}</h6>
            </div>
            <div className="col-md-4">
              <h6 className="card-subtitle mb-2 text-muted">Employee Id : {this.state.employee}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Booked Date Time : {this.state.bookedDateTime}</h6>
           </div>
           <div className="col-md-4">
            <h6 className="card-subtitle mb-2 text-muted">Parking Slot Id : {this.state.slotId}}</h6>
           </div>  
          </div>
          <div class="card-footer bg-transparent border-dark text-center text-muted">
            <a href="/" className="btn btn-success">Ok</a>
          </div>
        </div>
      </div>
     
    </div>
  );
}

}

export default connect(mapStateToProps,mapDispatchToProps)(BookingLayout);

