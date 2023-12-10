import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import TopBar from "../components/shared/TopBar/TopBar";
import Footer from "../components/shared/Footer/Footer";

const MainLayouts = () => {
  // const location = useLocation();
  // const showTopbar = location.pathname("/");

  return (
    <div>
      <div className="hidden lg:block">
        <TopBar />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
