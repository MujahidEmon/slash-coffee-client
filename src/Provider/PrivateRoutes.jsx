import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <HashLoader color="#36d7b7" />
        </div>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
};

export default PrivateRoutes;