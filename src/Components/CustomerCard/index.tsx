import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './jss';

type Loan= {
    applied: boolean;
    bankName: string;
    subheadingLabel: string;
    subHeadingValue: string;
    bankLogo: string;
    amountLabel: string;
    amount: string;
    interestRates: string;
    minCreditScore: string;
    termLength: string;
    processingFee: string;
    approved?: boolean;
    rejected?: boolean;
}

type ILoans = {
    logo: string,
    title: string,
    loanAmount: string,
    interestRates: string,
    Mincreditscore: string,
    TermLenghth: string,
    ProcessingFee: string,
  }
  

type Props = {
    loan: Loan
    loans: ILoans
} 

const url = "http://localhost:8080";

const CustomerCard = ({loan, loans}: Props) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const handleApply = () => {
        axios.get(`${url}/appliedNewLoans`)
        .then((res) => { !!res.data.find((item: any)=>item.email === sessionStorage.getItem('email') && item.title === loan.bankName)? alert(`You've already applied for this loan.`): navigate("/customer/applyNow", {state: {loans}})})
        .catch(err => console.log(err));
      };

  return (
    <div className={classes.card}>
        <div className={classes.top}>
            <div className={classes.contentLeft}>
                <h3>{loan.bankName}</h3>
                <p className={`text-muted`}> {loan.subheadingLabel} {loan.subHeadingValue}</p>
                <img src={loan.bankLogo} alt="Bank Logo" height={150} width={200}/>
            </div>
            <div className={`text-muted ${classes.contentRight}`}>
                <ul className={classes.unlist}>
                    <li>{loan.amountLabel}: <span className={classes.listItems}>{loan.amount}</span></li>
                    <li>Interest Rates: <span className={classes.listItems}>{loan.interestRates}</span></li>
                    <li>Processing Fees: <span className={classes.listItems}>{loan.processingFee}</span></li>
                    <li>Term Length: <span className={classes.listItems}>{loan.termLength}</span></li>
                    {loan.applied? <li>Min Credit Score: <span className={classes.listItems}>{loan.minCreditScore}</span></li> : ''}
                </ul>
            </div>
        </div>
        <div className={!loan.applied ? `mt-3 ${classes.bottom}` : loan.approved ? `mt-3 bg-success ${classes.bottom}` : loan.rejected ? `mt-3 bg-danger ${classes.bottom}` : `mt-3 bg-secondary ${classes.bottom}`}>
            {!loan.applied ? <button className={classes.applyBtn} onClick={handleApply} >Apply now</button> : <p className='text-white'>Application {loan.approved ? 'Approved' : loan.rejected ? 'Rejected' : 'Pending' } </p>}
        </div>
    </div>
  )
}

export default CustomerCard