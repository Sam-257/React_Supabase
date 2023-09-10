import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomerCard from '../../Components/CustomerCard';

type Props = {}

type Loan = {
  logo: string,
  title: string,
  loanAmount: string,
  interestRates: string,
  Mincreditscore: string,
  TermLenghth: string,
  ProcessingFee: string,
}

const url = "http://localhost:8080";

const AllLoans = (props: Props) => {
  const [loans, setLoans] = useState<Loan[]>([]);
  useEffect(() => {
    axios.get(`${url}/loans`)
    .then((res) => setLoans(res.data))
    .catch(err => console.log(err));
    
  }, [])
  
  return (
    <>
        {loans.map((item, index) => {
            let loan = {
                applied: false,
                bankName: item.title,
                subheadingLabel: 'Rating',
                subHeadingValue: '4.6',
                bankLogo: item.logo,
                amountLabel: 'Loan Amount',
                amount: item.loanAmount,
                interestRates: item.interestRates,
                minCreditScore: item.Mincreditscore,
                termLength: item.TermLenghth,
                processingFee: item.ProcessingFee
            }
            return <CustomerCard key={index} loan={loan} loans={item}/>
        })}
    </>
  )
}

export default AllLoans