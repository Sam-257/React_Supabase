import React, {useState, useEffect} from 'react';
import axios from 'axios';
import useStyles from './jss';
import { useNavigate } from 'react-router-dom';

type Props = {}

const url = "http://localhost:8080";

type User = {
  id: number,
  email: string,
  gender: string,
  name: string,
  password: string,
  role: "CUSTOMER" | "MANAGER",
}

const Login = (props: Props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({email:'', password:''});
    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
      axios.get(`${url}/user`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
    }, []);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm({...loginForm, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e: any) => {
      e.preventDefault();
      let user = userData?.find((user) => user.email === loginForm.email && user.password === loginForm.password);
      if(user){
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('name', user.name);
        sessionStorage.setItem('role', user.role);
        user.role === "CUSTOMER" ? navigate('/customer') : navigate('/manager');
      } else alert('Incorrect email or password')
    }

  return (
    <div className={classes.content}>
        <div className={classes.contentWrapper}>
          <form className={classes.card} onSubmit={handleSubmit}>
            <h1 className='mt-4'>Login</h1>
            <input type="email" name='email' className='form-control my-3' placeholder='Enter your Email' onChange={handleChange} value={loginForm.email} />
            <input  type="password" name='password' className='form-control my-3' placeholder='Enter your Password'  onChange={handleChange} value={loginForm.password} />
            <button type="submit" className={`my-3 ${classes.loginBtn}`}>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login