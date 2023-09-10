import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import useStyles from './jss';

type Props = {}

const CustomerNavbar = (props: Props) => {
    const classes = useStyles();
  return (
    <>
        <div className={classes.navbar}>
            <div className={classes.linksBox} >
                <Link to='allLoans' className={classes.links}>All Loans</Link>
            </div>
            <div className={classes.linksBox} >
                <Link to="appliedLoans" className={classes.links}>Applied Loans</Link>
            </div>
        </div>
        <section className={classes.contentWrapper}>
            <Outlet />
        </section>
    </>
  )
}

export default CustomerNavbar