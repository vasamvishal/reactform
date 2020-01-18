import React, { Component } from 'react';
import './customerDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';




class CustomerDetails extends Component {

    render() {

        return (

            <div className='main'>
                <div className='upper'>
                    <div className='dashboard'>
                        <div className='logo'>
                            <img src="https://img.icons8.com/ios/64/000000/open-book.png"></img>
                        </div>
                        <div className='title'>Bookstore</div>
                        <div className='search'>Search</div>
                    </div>
                </div>
                <div className='subMain'>
                    <div className='lowerP' style={{ height: '530px' }}>
                        <div className='customerDetails'>CustomerDetails</div>
                        <div className='content'>
                            <div className='name'>
                                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: '100%' }} />
                            </div>
                            <div className='phonenumber'>
                                <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className='content'>
                            <div className='name'>
                                <TextField id="outlined-basic" label="Pincode" variant="outlined" style={{ width: '100%' }} />
                            </div>
                            <div className='phonenumber'>
                                <TextField id="outlined-basic" label="Locality" variant="outlined" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className='address'>
                            <TextField id="outlined-multiline-static" label="Address" multiline rows="3" variant="outlined" style={{ width: '66%' }} />
                        </div>
                        <div className='content'>
                            <div className='name'>
                                <TextField id="outlined-basic" label="city/town" variant="outlined" style={{ width: '100%' }} />
                            </div>
                            <div className='phonenumber'>
                                <TextField id="outlined-basic" label="Landmark" variant="outlined" style={{ width: '100%' }} />
                            </div>
                        </div>

                        <div style={{ paddingLeft: '2%', paddingBottom: '1%' }}>Type</div>
                        <FormControl component="fieldset" style={{ paddingLeft: '2%' }}>
                            {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
                            <RadioGroup aria-label="position" name="position" row>
                                <FormControlLabel
                                    value="top"
                                    control={<Radio color="primary" />}
                                    label="Home"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="start"
                                    control={<Radio color="primary" />}
                                    label="Work"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="bottom"
                                    control={<Radio color="primary" />}
                                    label="Other"
                                    labelPlacement="end"

                                />

                            </RadioGroup>
                        </FormControl>

                        <div className='continue' style={{ float: 'right' }} onClick={this.Oncontinue} >CONTINUE</div>



                    </div>
                    <div className='lowerP'>
                        Order summary
                    </div>
                </div>

            </div>
        );
    }
}
export default CustomerDetails;