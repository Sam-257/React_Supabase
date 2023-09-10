import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomerCard from '../../Components/CustomerCard';

type Props = {}
const url = "http://localhost:8080";

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

const AppliedLoans = (props: Props) => {
  const [appliedLoans, setAppliedLoans] = useState<IAppliedLoans[]>([]);
  useEffect(() => {
    axios.get(`${url}/appliedNewLoans`)
    .then((res) => {
      let temp = res.data.filter((item:IAppliedLoans) => item.email === sessionStorage.getItem('email'))
      setAppliedLoans(temp);
    })
    .catch(err => console.log(err));
    
  }, [])
  return (
    <>
        {appliedLoans.length > 0 ? appliedLoans.map((item) => {
            let loan = {
                applied: true,
                bankName: item.title,
                subheadingLabel: 'Applied Date',
                subHeadingValue: '2020-05-26',
                bankLogo: item.logo,
                amountLabel: 'Loan Amount',
                amount: item.loanAmountToApply,
                interestRates: item.interestRates,
                minCreditScore: item.Mincreditscore,
                termLength: item.TermLenghth,
                processingFee: item.ProcessingFee,
                approved: item.approved,
                rejected: item.rejected, 
            }
            return <CustomerCard key={item.id} loan={loan} loans={item}/>
        }) : <h1 className='m-auto text-white'> You haven't applied any loans yet.</h1>}
    </>
  )
}

export default AppliedLoans