import React,{ Component} from 'react';
import Configuration from '../../routes'

const bloksAndFloors={
  "5":["1"],
  "10":["5","7"]
}
export default class BookingLayout extends Component{

  constructor(props){
    super(props);
      this.initialState = {
      block: '',
      floor:'',
      employeeId:'',
      bookedDateTime:''
    };
    this.handleBLock = this.handleBLock.bind(this)
    this.handleFloor = this.handleFloor.bind(this)
    this.state = this.initialState

    this.config = new Configuration()

  }
  handleBLock (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
    
  }

  handleFloor (event) {
    const name = event.target.name
    const value = event.target.value
    console.log("flor"+name+"val"+value);
    
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
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
                    { Object.keys(bloksAndFloors).map((block,i)=>
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
                    <option value='' disabled="true"></option>
                     <option key={bloksAndFloors[this.state.block]} value={bloksAndFloors[this.state.block]}>{bloksAndFloors[this.state.block]}</option>)}
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
