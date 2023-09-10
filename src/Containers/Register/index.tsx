import axios from 'axios';
import React, {useState} from 'react'
import useStyles from './jss';
import {useNavigate} from 'react-router-dom';

type Props = {}
const url = "http://localhost:8080";

const Register = (props: Props) => {
    const classes = useStyles();
    const navigate = useNavigate(); 
    const [registerForm, setRegisterForm] = useState({name:'', email:'', password:'', gender:'', salary: '', role:'CUSTOMER'});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value});
      };

    const handleSubmit = (e:any) => {
        axios.post(`${url}/user`,registerForm)
        .then((res) => {
            alert('User Registered Successfully');
            navigate('/login');
        })
        .catch(err => console.log(err))
    }
  return (
    <div className={classes.content}>
        <div className={classes.contentWrapper}>
            <div className={classes.card}>
                <h1 className='mt-4'>Register</h1>
                <input type="text" name="name" className='form-control my-3' placeholder='Enter your Name' value={registerForm.name}  onChange={handleChange} />
                <input type="email" name="email" className='form-control my-3' placeholder='Enter your Email' value={registerForm.email} onChange={handleChange} />
                <input  type="password" name='password' className='form-control my-3' placeholder='Enter your Password' value={registerForm.password} onChange={handleChange} />
                <div className={`my-3 ${classes.radioWrap}`}>
                    <b>Gender</b>: 
                    <input type="radio" className="form-check-input mx-2" name="gender" value="male"  onChange={handleChange} /> Male
                    <input type="radio" className="form-check-input mx-2" name="gender" value="female"  onChange={handleChange} /> Female
                </div>
                <input type="text" name='salary' className='form-control my-3' placeholder='Enter your Salary'  value={registerForm.salary} onChange={handleChange} />
                <button type='submit' className={`my-3 ${classes.registerBtn}`}  onClick={handleSubmit}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register