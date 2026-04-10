import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../pages/LoadingSpinner";

const Main = () => {

    const { loading } = useAuth();

    < ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
    />

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="bg-[#E0DACE]">
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;