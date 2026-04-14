import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-white pt-10 md:pt-20 pb-7.5">
      <div className="mx-auto w-11/12 md:w-9/12 max-w-277.5">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h1>
          <p className="mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h4 className="mb-4 text-xl md:text-2xl font-semibold">
            Social Links
          </h4>
          <div className="flex gap-3 mb-10">
            <div className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center text-xl">
              <FaSquareInstagram />
            </div>
            <div className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center text-xl">
              <FaSquareFacebook />
            </div>
            <div className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center text-xl">
              <FaXTwitter />
            </div>
          </div>
          <hr className="mb-7.5 w-full opacity-50" />
          <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-4">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
