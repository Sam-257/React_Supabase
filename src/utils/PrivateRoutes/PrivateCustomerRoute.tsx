import { Navigate, Outlet} from "react-router-dom";

const PrivateCustomerRoute = () => {
    const isLoggedIn = sessionStorage.getItem('role')==="CUSTOMER";
    const logout = () => {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('role');
        return <Navigate to='/login' />
    }
    return isLoggedIn ? <Outlet /> : <>{logout()}</>
}

export default PrivateCustomerRoute