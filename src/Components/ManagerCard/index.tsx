import axios from 'axios';
import React from 'react';
import useStyles from './jss';

type Loan= {
    bankLogo: string
    profileImage: string
    name: string
    gender: string
    salary: string
    age: number,
    minCreditScore: string
    appliedAmount: string
    interestRates: string
    processingFee: string
    termLength: string
    appliedDate: string
    approved: boolean
    rejected: boolean
    id: number
  }

type Props = {
    loan: Loan,
    getFunc: () => void,
} 

const url = "http://localhost:8080";

const ManagerCard = ({loan, getFunc}: Props) => {
    const classes = useStyles();

    const handleApproved = () => {
        axios.patch(`${url}/appliedNewLoans/${loan.id}`, {"approved" : true}, {headers:{"content-type":"application/json"}})
        .then(() => getFunc())
        .catch((err) => console.log(err));
    }

    const handleRejected = () => {
        axios.patch(`${url}/appliedNewLoans/${loan.id}`, {"rejected" : true}, {headers:{"content-type":"application/json"}})
        .then(() => getFunc())
        .catch((err) => console.log(err));
    }

  return (
    <div className={classes.card}>
        <img src={loan.bankLogo} alt="Bank Logo" className={classes.logo} />
        <div className={classes.top}>
            <img src={loan.profileImage} alt="Profile"  className={classes.profileImage}/>
            <div className={classes.topLeft}>
                <ul className={classes.unlist}>
                    <li>Applicant: <span className={classes.listItems}>{loan.name}</span></li>
                    <li>Gender: <span className={classes.listItems}>{loan.gender}</span></li>
                    <li>Age: {'\u00A0'} <span className={classes.listItems}>{loan.age}</span></li>
                    <li>Salary: {'\u00A0'} <span className={classes.listItems}>{loan.salary}</span></li>
                    <li>Credit Score: <span className={classes.listItems}>{loan.minCreditScore}</span></li>
                </ul>
            </div>
            <div className={classes.topRight}>
                <ul className={classes.unlist}>
                    <li>Applied Amout: <span className={classes.listItems}>{loan.appliedAmount}</span></li>
                    <li>Interest Rates: <span className={classes.listItems}>{loan.interestRates}</span></li>
                    <li>Processing Fees: <span className={classes.listItems}>{loan.processingFee}</span></li>
                    <li>Term Length: <span className={classes.listItems}>{loan.termLength}</span></li>
                    <li>Applied Date: <span className={classes.listItems}>{loan.appliedDate}</span></li>
                </ul>
            </div>
            
        </div>
        <div className={classes.bottom}>
            {!(loan.approved || loan.rejected) ? 
                <div className={classes.pendingWrapper}> 
                    <div className={`bg-secondary ${classes.message}`}>Waiting for Manager Verification....</div>
                    <div className={classes.btnWrapper}>
                        <button className='btn btn-success' onClick={handleApproved}>Approve</button>
                        <button className='btn btn-danger' onClick={handleRejected}>Reject</button>
                    </div>
                </div>
            : <div className={loan.approved ? `bg-success ${classes.message}` : `bg-danger ${classes.message}`}>
                Loan {loan.approved ? 'Approved': 'Rejected'} 
            </div>
            }
        </div>
    </div>
  )
}

export default ManagerCard