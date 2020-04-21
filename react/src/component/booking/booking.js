import React,{ Component} from 'react';
import Configuration from '../../routes'

const slots ={
  "5":[{"1":[{"id":"P51001","isBooked":"true"},{"id":"P51002","isBooked":"false"},{"id":"P51003","isBooked":"false"},{"id":"P51004","isBooked":"false"},{"id":"P51005","isBooked":"false"}]}],
  "10":[{"5":[{"id":"P1050001","isBooked":"false"},{"id":"P1050002","isBooked":"false"},{"id":"P1050003","isBooked":"false"},{"id":"P1050004","isBooked":"false"},{"id":"P1050005","isBooked":"false"}]},
  {"7":[{"id":"P1070001","isBooked":"false"},{"id":"P1070002","isBooked":"false"},{"id":"P1070003","isBooked":"false"},{"id":"P1070004","isBooked":"false"},{"id":"P1070005","isBooked":"false"}]}]
}

export default class BookingLayout extends Component{

  constructor(props){
    super(props);
      this.initialState = {
      block: '',
      floor:'',
      slotId:'',
      employeeId:'',
      bookedDateTime:''
    };
    this.handleBLock = this.handleBLock.bind(this)
    this.handleFloor = this.handleFloor.bind(this)
    this.state = this.initialState
    this.floors=[];
    this.availableSlots=[];
    this.config = new Configuration()
  }

  getSlots(){
    let slotId=this.availableSlots[Math.floor(Math.random() * this.availableSlots.length)].id
    console.log("val",slotId);
    return slotId
  }
  
  handleBLock (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
   this.floors=[]
   this.availableSlots=[]
   slots[value].forEach((fl,j)=>{
      Object.keys(fl).map(floor=>{
        this.floors.push(floor);
      })})
      this.availableSlots=slots[value]["0"][this.floors[0]].filter(ob => ob.isBooked ==="false")
      console.log("availableSlots",JSON.stringify(this.availableSlots))
     this.setState({floor:this.floors[0]});
  }

  handleFloor (event) {
    const name = event.target.name
    const value = event.target.value    
    this.availableSlots=[]
    this.setState({
      [name]: value
    })
    
    this.availableSlots=slots[this.state.block]["1"][value].filter(ob => ob.isBooked ==="false")
    console.log("availableSlots",JSON.stringify(this.availableSlots))

}

  handleFormSubmit = event => {
    event.preventDefault();
    var id=this.getSlots();
    console.log("id",id);
    
    this.setState({
      slotId: id
    })   
    console.log("You have booked a slot:", JSON.stringify(this.state));

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
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.state.block === ''}
              >
                Book
              </button>
            </form>
          </div>
        </div>
        

     
     



    </div>


  );
}

}
