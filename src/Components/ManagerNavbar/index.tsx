import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import useStyles from './jss';

type Props = {}

const ManagerNavBar = (props: Props) => {
    const classes = useStyles();
  return (
    <>
        <div className={classes.navbar}>
            <div className={classes.linksBox} >
                <Link to='all' className={classes.links}>All Applications</Link>
            </div>
            <div className={classes.linksBox} >
                <Link to="pending" className={classes.links}>Pending Applications</Link>
            </div>
            <div className={classes.linksBox} >
                <Link to="approved" className={classes.links}>Approved Applications</Link>
            </div>
            <div className={classes.linksBox} >
                <Link to="rejected" className={classes.links}>Rejected Applications</Link>
            </div>
        </div>
        <section className={classes.contentWrapper}>
            <Outlet />
        </section>
    </>
  )
}

export default ManagerNavBar