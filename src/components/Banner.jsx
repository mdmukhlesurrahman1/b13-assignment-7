import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">
        Friends to keep close in your life
      </h1>
      <p className="py-4 mb-4">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] mb-10 text-white">
        <FaPlus /> Add a Friend
      </button>
      <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-[#244D3F] text-3xl font-semibold">10</p>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-[#244D3F] text-3xl font-semibold">4</p>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-[#244D3F] text-3xl font-semibold">3</p>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-[#244D3F] text-3xl font-semibold">12</p>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
