import Image from "next/image";
import logo from "../../assets/logo.png";
import { FaChartLine, FaHome, FaTimes } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";

const Header = () => {
  const links = (
    <>
      <li className="font-bold px-4 py-2 rounded-sm text-[#64748B]">
        <div className="flex items-center">
          <FaHome /> Home
        </div>
      </li>
      <li className="font-bold px-4 py-2 rounded-sm text-[#64748B]">
        <div className="flex items-center">
          <RiTimeLine /> Timeline
        </div>
      </li>
      <li className="font-bold px-4 py-2 rounded-sm text-[#64748B]">
        <div className="flex items-center">
          <FaChartLine /> States
        </div>
      </li>
    </>
  );
  return (
    <div className="bg-white text-black shadow-sm">
      <div className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Image src={logo} alt="logo" width={141} height={31} />
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
