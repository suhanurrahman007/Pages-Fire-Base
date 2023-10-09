import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";
import Footer from "../components/Header/Footer/Footer";

const Root = () => {
    return (
        <div className="space-y-7 px-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;