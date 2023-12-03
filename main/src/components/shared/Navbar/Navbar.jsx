import Logo from "./Logo";
import MenuForLargeDevice from "./MenuForLargeDevice";
import MenuForMobileDevice from "./MenuForMobileDevice";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="bg-[#1FBEF9]  sticky top-0 z-10">
      <div className="container mx-auto">
        <nav className="w-full flex justify-between items-center h-[60px] px-2 sm:px-3">
          <div className="hidden lg:block">
            <MenuForLargeDevice />
          </div>
          <div className="lg:hidden block">
            <MenuForMobileDevice />
          </div>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <div className="lg:hidden block">
            <Logo />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
