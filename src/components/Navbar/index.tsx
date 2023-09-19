import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import useStyles from "./jss";

type Props = {};

const Navbar = (props: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    !!sessionStorage.getItem('email')? setIsLoggedIn(true) : setIsLoggedIn(false) ;
  });

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('role');
    setIsLoggedIn(false)
    navigate('/login');
  }
  return (
    <>
      <nav className={classes.navBarContainer}>
        <div className={classes.logoWrapper}>
          <Link to="/home">
            <img
              className={classes.logo}
              src="data:image/png;base64,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"
              alt="logo"
            />
          </Link>
        </div>
        <div className={classes.buttonWrapper}>
          {isLoggedIn ? (
            <>
              <h5 className="text-white m-auto ">Welcome, {sessionStorage.getItem('name')}! </h5>
              <button className={classes.buttons} onClick={handleLogout}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className={classes.buttons}
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className={classes.buttons}
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
