import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../pages/LoadingSpinner";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return children
};

export default PrivetRoute;