import { InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {register} from '../service/apiService'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);
function Registration()  {
    const [regdetails, setRegdetails] = useState({
        email:'',
        phone: 90000,
        password: '',
        address: '',
        aadharNumber: ''
    });
    const [email, setEmail] = useState("");

    const classes = useStyles();
    const handleSubmit = (event:any) => {
        console.log('event', event )
        event.preventDefault();
        alert(`Submitting Name ${JSON.stringify(regdetails)}`)
        register(regdetails);
    }
    const changeValue = (event:any)=> { const val = event.target.value;
        console.log('changevalue', event.target.value)
        setRegdetails(prevState => {
          return { ...prevState, email: val }
        });       
    }
    const editPhone = (event:any) => {
        setRegdetails(prev => ({...prev, phone: event.target.value}))
    };
    const changeAddress = (event:any) => {
        setRegdetails(prev => ({...prev, address: event.target.value}))
    };
    const changePassword = (event:any) => {
        setRegdetails(prev => ({...prev, password: event.target.value}))
    }
    const changeAadhar = (event:any) => {
        setRegdetails(prev => ({...prev, aadharNumber: event.target.value}))
    }
    
    return (
        <div>
        <h1>  Registration : </h1>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField required id="standard-required" 
        label="Email Address" 
        value={regdetails.email}
        onChange={changeValue} 
      />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={changePassword} 
        />
       
        
       <TextField
          id="standard-number"
          label="Phone Number"
          type="number"
          onChange={editPhone}
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="aadhar"
          label="Aadhar"
          type="number"
          placeholder="Enter Aadhar Number"
            onChange={changeAadhar} 
        />
     <TextField
          id="address"
          label="Address"
          placeholder="Enter Address"
          multiline
            onChange={changeAddress} 
        />

      </div>
      <Button  type="submit" value="Submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
        </div>
    )
}

export default Registration
