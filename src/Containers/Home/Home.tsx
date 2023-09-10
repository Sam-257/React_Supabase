import React from 'react';
import Footer from '../../Components/Footer';
import useStyles from "./jss";

type Props = {}

const Home = (props: Props) => {
    const classes = useStyles();
  return (
    <div className={classes.content}>
        <div className={classes.contentWrapper}>
            <h1>Personal Loans up to $35000</h1>
            <p>No origination fees | No pre-payment fees | No late fees</p>
            <div className={classes.card}>
              <div className={classes.left}>
                <p>Fixed Rates with AutoPay:</p>
                <h1>5.99% APR - 19.96% APR</h1>
                <p>Checking Your rate will not affect your credit score</p>
              </div>
              <div className={classes.right}>
                <button className={classes.rightBtn}>Get my loan today</button>
              </div>
            </div>  
        </div>
        <Footer />
    </div>
  )
}

export default Home