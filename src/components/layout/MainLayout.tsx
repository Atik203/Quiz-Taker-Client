import { Outlet } from "react-router-dom";
import Footer from "../ui/custom/Footer";
import Navbar from "../ui/custom/Navbar";

const MainLayout = () => {
  return (
    <div className=" mx-auto">
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
