import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login';
import Register from './Containers/Register';
import CustomerNavbar from './Components/CustomerNavbar';
import AllLoans from './Containers/Customers/AllLoans';
import AppliedLoans from './Containers/Customers/AppliedLoans';
import ManagerNavBar from './Components/ManagerNavbar';
import LoansContainer from './Containers/Manager/LoansContainer';
import PrivateCustomerRoute from './utils/PrivateRoutes/PrivateCustomerRoute';
import PrivateManagerRoute from './utils/PrivateRoutes/PrivateManagerRoute';
import ApplyNow from './Containers/Customers/ApplyNow';

const App = () => {
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
