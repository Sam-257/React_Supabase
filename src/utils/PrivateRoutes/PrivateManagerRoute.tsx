import { Navigate, Outlet} from "react-router-dom";

const PrivateManagerRoute = () => {
    const isLoggedIn = sessionStorage.getItem('role')==="MANAGER";
    const logout = () => {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('role');
        return <Navigate to='/login' />
    }
    return isLoggedIn ? <Outlet /> : <>{logout()}</>
}

export default PrivateManagerRoute