import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import ManagerCard from '../../Components/ManagerCard';

type Props = {}

type IAppliedLoans = {
  name: string,
  email: string,
  password:string,
  gender: string,
  salary: string,
  age: number,
  role: "CUSTOMER" | "MANAGER",
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
  id: number
};

const url = "http://localhost:8080";

const LoansContainer = (props: Props) => {
  const location = useLocation();
  const [loanData, setLoanData] = useState<IAppliedLoans[]>();

  const [tab,setTab] = useState<string>('all');

  useEffect(() => {
    setTab(location.pathname.split("/")[2]);
  }, [location.pathname]);

  const allLoans = () => {
    axios.get(`${url}/appliedNewLoans`)
    .then((res) => {setLoanData(res.data);})
    .catch(err => console.log(err));
  }

  const pendingLoans = () => {
    axios.get(`${url}/appliedNewLoans`)
    .then((res) => {setLoanData(res.data.filter((item:IAppliedLoans) => !(item.approved || item.rejected)));})
    .catch(err => console.log(err));
  }

  const approvedLoans = () => {
    axios.get(`${url}/appliedNewLoans`)
    .then((res) => {setLoanData(res.data.filter((item: IAppliedLoans) => item.approved));})
    .catch(err => console.log(err));
  }

  const rejectedLoans = () => {
    axios.get(`${url}/appliedNewLoans`)
    .then((res) => {setLoanData(res.data.filter((item: IAppliedLoans) => item.rejected));})
    .catch(err => console.log(err));
  }

  const tabToFunc:any = {
    "all": allLoans,
    "pending": pendingLoans,
    "approved": approvedLoans,
    "rejected": rejectedLoans
  };

  useEffect(() => {
    if(tab === 'all'){
      allLoans();
    } else if( tab === 'pending') {
      pendingLoans();
    } else if (tab === 'approved') {
      approvedLoans();
    } else if (tab === 'rejected') {
      rejectedLoans();
    }
  }, [tab]);
  return (
    <>
      {loanData ? loanData?.map((item, index) => {
          let loan = {
            bankLogo: item.logo,
            profileImage: "https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg",
            name: item.name,
            gender: item.gender,
            salary: item.salary,
            age: item.age,
            minCreditScore: item.Mincreditscore,
            appliedAmount: item.loanAmountToApply,
            interestRates: item.interestRates,
            processingFee: item.ProcessingFee,
            termLength: item.TermLenghth,
            appliedDate: "2020-05-26",
            approved: item.approved,
            rejected: item.rejected,
            id: item.id
          }
          return <ManagerCard key={index} loan={loan} getFunc={tabToFunc[tab]}/>
      }) : <h1 className='m-auto text-white'> Nothing left to show.</h1>}
    </>

  )
}

export default LoansContainer