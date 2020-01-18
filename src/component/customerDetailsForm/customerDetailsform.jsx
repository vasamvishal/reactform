import React, { Component } from 'react'
import './customerDetailsForm.css';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import BooksService from '../service/service'
const axios = require('axios');


class customerDetailsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Phone_Number: '',
            Pincode: '',
            Email: '',
            Address: '',
            city: '',
            LandMark: ''
        };

    }
    // componentDidMount() {
    //     new BooksService().customerDetails.then(response => {
    //        // console.log("response friom get", response);
    //        var allBooks = response.data.result;
    //        console.log("allBooks",allBooks);
    //        this.setState({getBooks:allBooks})
    //     }

    //     )}


    // handleNameChange=(e)=> {
    //     // this.state.push(e.target.value)
    //     this.setState({Name: e.target.value});
    //  }
    //  handlePhoneNumberChange=(e)=> {
    //     // this.state.push(e.target.value)
    //     this.setState({PhoneNumber: e.target.value});
    //  }


    //     <form onMouseLeave={() => this.handleOnHoverFilter() }>
    // <TextField name="min" value={this.state.min} onChange={(event)=>this.handleValueChange(event)}></TextField>
    // <TextField name="max" value={this.state.max} onChange={(event)=>this.handleValueChange(event)}></TextField>

    // <Button onClick={() => this.handleOnClickFilter()}>Filter</Button>
    // </form>

    handleValueChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target
        console.log(this.setState({
            [name]: value
        }))
    }
   
    handleLogin = (e) => {
        // this.setState({PhoneNumber: e.target.value});
        console.log("aaa", this.state)
        console.log("Name: " + this.state.Name);
        console.log("PhoneNumber: " + this.state.Phone_Number);
       
            const body = {
                Name: this.state.Name,
                Phone_Number: this.state.Phone_Number,
                Pincode: this.state.PinCode,
                Address:this.state.Address,
                city: this.state.city,
                LandMark: this.state.LandMark,
                Type: this.state.Type

            };
            console.log(body);
            
            this.setState({
                Name: '', 
                Phone_Number: '', 
                PinCode: '',
                Locality:'',
                Email: '',
                Address: '',
                city: '',
                LandMark: '',
                Type: ''
            });



      axios.post(`http://192.168.0.117:4000/customerDetails`, body)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

    render() {
        return (
            <div className='mainForm'>
                <div className="toolBar">
                    <div className="imageLogo">
                        <img src="https://img.icons8.com/ios/64/000000/open-book.png" alt="abc" className="image"></img>
                    </div>
                    <div className="title">Book Store</div>
                    <div className="search">
                        <SearchIcon className="searchColor" />
                        <input type="text" className="input" placeholder="Search..." />
                    </div>
                </div>
                <div className='spacepaddding'>  </div>
                <form className="form" >
                    <div style={{ paddingTop: '3%', paddingBottom: '2%' }}><div style={{ paddingBottom: '2%' }}>CustomerDetails</div>
                        <div style={{ width: '80%', paddingBottom: '1%' }}>
                            <TextField id="outlined-basic" label="Name" name='Name' variant="outlined" value={this.state.Name} onChange={(event) => this.handleValueChange(event)} style={{ width: '35%', marginRight: '0%' }} required />
                            <TextField id="outlined-basic" label="PhoneNumber" name='Phone_Number' variant="outlined" value={this.state.Phone_Number} onChange={(event) => this.handleValueChange(event)} style={{ width: '39%', marginLeft: '1%' }} required />
                        </div>
                        <div style={{ width: '80%' }}>
                            <TextField id="outlined-basic" label="PinCode" name="PinCode" value={this.state.PinCode} onChange={(event) => this.handleValueChange(event)} variant="outlined" style={{ width: '35%', marginRight: '0%' }} required />
                            <TextField id="outlined-basic" label="Locality" name="Locality" value={this.state.Locality} onChange={(event) => this.handleValueChange(event)} variant="outlined" style={{ width: '39%', marginLeft: '1%' }} required />
                        </div>
                    </div>
                    <div >
                        <TextField id="outlined-multiline-static" label="Address" multiline rows="4" name="Address" style={{ width: '60%' }} value={this.state.Address} onChange={(event) => this.handleValueChange(event)} variant="outlined" required />
                    </div>
                    <div style={{ paddingTop: '1%' }}>
                        <div style={{ width: '80%', marginBottom: "0%" }}>
                            <TextField id="outlined-basic" label="city/town" variant="outlined" name="city" value={this.state.city} onChange={(event) => this.handleValueChange(event)} style={{ width: '35%', marginRight: '0%' }} required />
                            <TextField id="outlined-basic" label="LandMark" variant="outlined" name="LandMark" value={this.state.LandMark} onChange={(event) => this.handleValueChange(event)} style={{ width: '39%', marginLeft: '1%' }} required />
                        </div>
                    </div>
                    <div className='radiobutton'>
                        <div style={{ paddingTop: '2%' }} component="legend">Type</div>
                        <RadioGroup aria-label="type" name="Type" row >
                            <div style={{ paddingRight: '8%' }}>
                                <FormControlLabel value="Home" checked={this.state.radio === 'Home'} onChange={(event) => this.handleValueChange(event)} control={<Radio />} label="Home" />
                            </div>
                            <div style={{ paddingRight: '8%' }}>
                                <FormControlLabel value="Work" control={<Radio />} checked={this.state.radio === 'Work'} onChange={(event) => this.handleValueChange(event)} label="Work" />
                            </div>
                            <div style={{ paddingRight: '8%' }}>
                                <FormControlLabel value="Other" checked={this.state.radio === 'Other'} onChange={(event) => this.handleValueChange(event)} control={<Radio />} label="Other" />
                            </div>
                        </RadioGroup>
                    </div>
                    <div className='button'><Button style={{ paddingLeft: '5%', paddingRight: '5%' }} onClick={this.handleLogin} variant="contained" color="primary">CONTINUE</Button></div>

                </form>
                <div className='lastDiv'><div style={{ paddingLeft: '5%', paddingTop: '1%' }}>Order Summary</div></div>
            </div>
        )
    }
}
export default customerDetailsForm