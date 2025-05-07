import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <HashLoader color="#36d7b7" />
        </div>
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    
    return children;
    
};

export default PrivateRoutes;