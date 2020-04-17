import React, {Component} from 'react'
import Configuration from '../../routes'
import { connect } from "react-redux";
import { addEmployee, editEmployee } from "../../actions/employee-action";


 class CreateEmployee extends Component {
  constructor (props) {
    super(props)
    console.log('orops' + JSON.stringify(this.props))
    // this.isNew:true
    this.initialState = {
      id: '',
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      contactNo: '',
      gender: ''
    }
    if (this.props.location.state) {
      this.state = this.props.location.state
      this.isNew = false
    } else {
      this.state = this.initialState
      this.isNew = true
    }

    this.config = new Configuration()
    this.handleChange = this.handleChange.bind(this)
    this.createEmployee = this.createEmployee.bind(this)
    this.editEmployee = this.editEmployee.bind(this)

    this.generateId = this.generateId()
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  generateId () {
    const min = 1
    const max = 100
    return Math.floor(min + Math.random() * (max - min))
  }

  editEmployee (event) {
    event.preventDefault()
    console.log('Edit employee')
    this.props.editEmployee(this.state) 
    setTimeout(() => {
      this.props.history.push('/employee/list')
    }, 1000);
  }

  async createEmployee (event) {
    event.preventDefault()
    console.log('Create  employee')
    await this.setState({
      id: this.generateId
    })
    this.props.addEmployee(this.state);
    setTimeout(() => {
      this.props.history.push('/employee/list')
    }, 1000);  }
  
  render () {
    console.log("this state",this.isNew)

    const title = (this.isNew ? 'Create' : 'Edit')
    return (
      <div className='container-fluid'>
        <div>
          <div className='col-md-12'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'><a href='/'>Home</a></li>
                <li className='breadcrumb-item'><a href='/employee/list'>Employee</a></li>
                <li className='breadcrumb-item active' aria-current='page'>{title}</li>
              </ol>
            </nav>
          </div>
          <div>
            <form className='well form-horizontal' action=' ' method='post' id='contact_form'>
              <legend>
                <center>
                  <h2><b>{title} Employee Form</b></h2></center>
              </legend>
              <br />

              <div className='form-group'>
                <label className='col-md-4 control-label'>First Name</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                    <input name='firstName' placeholder='First Name' className='form-control' onChange={this.handleChange} type='text' value={this.state.firstName} />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label'>Last Name</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                    <input name='lastName' placeholder='Last Name' className='form-control' onChange={this.handleChange} type='text' value={this.state.lastName} />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label'>Tier / Level</label>
                <div className='col-md-4 selectContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-list' /></span>
                    <select id='tier'name='tier' className='form-control selectpicker' value={this.state.tier} onChange={this.handleChange}>
                      <option value=''>Select Tier</option>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label'>Username</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-user' /></span>
                    <input name='userName' placeholder='Username' readOnly={!this.isNew} className='form-control' onChange={this.handleChange} type='text' value={this.state.userName} />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label'>Gender</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <div className='form-check-inline'>
                      <label className='form-check-label' htmlFor='male'>
                        <input type='radio' className='form-check-input' id='male' name='gender' value='male' checked={this.state.gender==='male'} onChange={this.handleChange}/>Male
                      </label>
                    </div>
                    <div className='form-check-inline'>
                      <label className='form-check-label' htmlFor='female'>
                        <input type='radio' className='form-check-input' id='female' name='gender' value='female' checked={this.state.gender==='female'} onChange={this.handleChange} />Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label'>E-Mail</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-envelope' /></span>
                    <input name='email' placeholder='E-Mail Address' className='form-control' onChange={this.handleChange} type='text' value={this.state.email} />
                  </div>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-4 control-label'>Contact No.</label>
                <div className='col-md-4 inputGroupContainer'>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='glyphicon glyphicon-earphone' /></span>
                    <input name='contactNo' placeholder='(+91)' className='form-control' type='text' onChange={this.handleChange} value={this.state.contactNo} />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label className='col-md-4 control-label' />
                <div className='col-md-4'><button type='submit' className='btn btn-primary' onClick={this.isNew ? this.createEmployee : this.editEmployee}>{title} <span className='glyphicon glyphicon-send' /></button>
                </div>
              </div>
            </form>

          </div>

        </div>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addEmployee: employee => dispatch(addEmployee(employee)),
    editEmployee: employee => dispatch(editEmployee(employee))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateEmployee)