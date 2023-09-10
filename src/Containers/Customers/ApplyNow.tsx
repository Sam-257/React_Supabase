import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DownArrow, UpArrow } from "../../utils/PrivateRoutes/icons";
import "./accordian.css";

type Props = {};
type IAppliedLoans = {
    name: string,
    email: string,
    password:string,
    gender: string,
    salary: string,
    age: number,
    role: string,
    logo: string,
    title: string,
    loanAmount: string,
    interestRates: string,
    Mincreditscore: string,
    TermLenghth: string,
    ProcessingFee: string,
    currentemployer: string,
    designation:string,
    loanAmountToApply: string,
    approved: boolean,
    rejected: boolean,
    id?:number
  };

  const url = "http://localhost:8080";

const ApplyNow = (props: Props) => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [appliedLoanData, setAppliedLoanData] = useState<IAppliedLoans>({
    name: '',
    email: '',
    password:'',
    gender: '',
    salary: '',
    age: 0,
    role: '',
    logo: '',
    title: '',
    loanAmount: '',
    interestRates: '',
    Mincreditscore: '',
    TermLenghth: '',
    ProcessingFee: '',
    currentemployer: '',
    designation:'',
    loanAmountToApply: '',
    approved: false,
    rejected: false,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const {state} = location;
  const {loans} = state;

  const handleChange = (e:any) => {
    setAppliedLoanData(prevState => {return {...prevState, [e.target.name]: e.target.value}});
  };

  const handleSubmit = () => {
    
    axios.post(`${url}/appliedNewLoans`, appliedLoanData,{headers:{"content-type": "application/json"}})
    .then(() => navigate('/customer/appliedLoans'))
    .catch(err=> console.log(err));
  }
  useEffect(() => {
    axios.get(`${url}/user`)
    .then((res) => {
        setAppliedLoanData(prevState => {return {...prevState, ...res.data.filter((item: any) => item.email === sessionStorage.getItem('email'))[0]}});
        setAppliedLoanData(current => {
            const {id, ...rest} = current;
            return rest;
          });
})
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setAppliedLoanData(prevState => {return {...prevState, ...loans}})
  }, [loans]);

  return (
    <>
      <h1 className="text-white">Hi, {sessionStorage.getItem("name")}</h1>
      <p className="text-secondary">
        Welcome to DS Finance 3-step loan application system....!
      </p>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive1(!isActive1)}
          >
            <div>
              (1)<b>First let's make sure your profile is up to date</b>
            </div>
            <div>{isActive1 ? <UpArrow /> : <DownArrow />}</div>
          </div>
          {isActive1 && <div className="accordion-content">
                <div className="form-control p-3">
                    <label htmlFor="currentemployer" className="mt-3">Current Employer: </label>
                    <input type="text" className="form-control" name="currentemployer" id="currentemployer" onChange={handleChange}/>
                    <label htmlFor="designation" className="mt-3">Designation: </label>
                    <input type="text" className="form-control" name="designation" id="designation" onChange={handleChange} />
                    <label htmlFor="salary" className="mt-3">Current Salary: </label>
                    <input type="text" className="form-control" name="salary" id="salary" onChange={handleChange} />
                </div>
            </div>}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive2(!isActive2)}
          >
            <div>
              (2) <b> Get your rate</b>
            </div>
            <div>
              {isActive2 ? <UpArrow /> : <DownArrow />}
            </div>
          </div>
          {isActive2 && <div className="accordion-content">
          <div className="form-control p-3">
            <ul>
                <li>Loan Provider: {loans.title}</li>
                <li>Term Length: {loans.TermLenghth}</li>
                <li>Required Minimum credit score: {loans.minCreditScore}</li>
                <li>Availale Loan amount range: {loans.loanAmount}</li>
            </ul>
                <label htmlFor="loanAmountToApply" className="mt-3">Please enter the amount you're applying: </label>
                <input type="text" className="form-control" name="loanAmountToApply" id="loanAmountToApply" onChange={handleChange} />
                <label htmlFor="staticInterestRate" className="mt-3">Interest rate based on your profile and applied amount: </label>
                <div className="bg-info text-white p-1 text-center" id="staticInterestRate">13.09%</div>
                </div>
            </div>}
        </div>
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive3(!isActive3)}
          >
            <div>
              (3) <b>Submit</b>
            </div>
            <div>{isActive3 ? <UpArrow /> : <DownArrow />}</div>
          </div>
          {isActive3 && <div className="accordion-content text-center">
                <button className="btn btn-warning text-white" onClick={handleSubmit}>Submit</button>
            </div>}
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
