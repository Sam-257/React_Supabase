import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerNavbar from './components/CustomerNavbar';
import AllLoans from './pages/Customers/AllLoans';
import AppliedLoans from './pages/Customers/AppliedLoans';
import ManagerNavBar from './components/ManagerNavbar';
import LoansContainer from './pages/Manager/LoansContainer';
import PrivateCustomerRoute from './utils/PrivateRoutes/PrivateCustomerRoute';
import PrivateManagerRoute from './utils/PrivateRoutes/PrivateManagerRoute';
import ApplyNow from './pages/Customers/ApplyNow';
import supabaseClient from './config/supabaseClient';

const App = () => {
  console.log(supabaseClient);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Navigate to='/home' />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route element={<PrivateCustomerRoute />}>
              <Route path='customer' element={<CustomerNavbar />}>
                <Route index element={<Navigate to='/customer/allLoans' />} />
                <Route path="allLoans" element={<AllLoans />} />
                <Route path="appliedLoans" element={<AppliedLoans />} />
                <Route path="applyNow" element={<ApplyNow />} />
              </Route> 
            </Route>
            <Route element={<PrivateManagerRoute />}>
              <Route path='manager' element={<ManagerNavBar />}>
                <Route index element={<Navigate to='/manager/all' />} />
                <Route path="all" element={<LoansContainer />} />
                <Route path="pending" element={<LoansContainer />} />
                <Route path="approved" element={<LoansContainer />} />
                <Route path='rejected' element={<LoansContainer />} />
              </Route> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
