import ActionButtons from "@/components/reusable/ActionButtons";
import FriendCard from "@/components/reusable/FriendCard";

import { MdArchive, MdDelete, MdSnooze } from "react-icons/md";

const friendDetailPage = async ({ params }) => {
    const { friendID } = await params;
    const res = await fetch("https://keen-keeper-one.vercel.app/friends.json");
    const friends = await res.json();

    const friend = friends.find((f) => f.id === parseInt(friendID));

    return (
        <div className="mx-auto w-11/12 md:w-9/12 max-w-277.5">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-6">

                
                {/* Left Side */}

                <div className="grid gap-2">
                    <FriendCard friend={friend} />
                    <button className="btn bg-white mt-2">
                        <MdSnooze /> Snooze 2 weeks
                    </button>
                    <button className="btn bg-white">
                        <MdArchive /> Archive
                    </button>
                    <button className="btn bg-white text-red-600">
                        <MdDelete /> Delete
                    </button>
                </div>

                {/* Right Side */}

                <div className="gap-6 grid">
                    {/* Right Top */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-sm p-6 content-center text-center">
                            <h2 className="text-[#244D3F] font-semibold text-3xl">
                                {friend.days_since_contact}
                            </h2>
                            <p className="text-[#64748B] text-sm">
                                Days Since Contact
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 content-center text-center">
                            <h2 className="text-[#244D3F] font-semibold text-3xl">
                                {friend.goal}
                            </h2>
                            <p className="text-[#64748B] text-sm">
                                Goal (Days)
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 content-center text-center">
                            <h2 className="text-[#244D3F] font-semibold text-xl">
                                {friend.next_due_date}
                            </h2>
                            <p className="text-[#64748B] text-sm">Next Due</p>
                        </div>
                    </div>

                    {/* Right Middle */}
                    <div className="bg-white rounded-lg shadow-sm p-6 content-center text-center">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-[#244D3F] font-medium text-xl">
                                Relationship Goal
                            </h2>
                            <button className="btn">Edit</button>
                        </div>
                        <p className="text-[#64748B] text-left">
                            Connect every{" "}
                            <span className="text-[#1F2937] font-bold">
                                {friend.goal} days
                            </span>
                        </p>
                    </div>

                    {/* Right End */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-[#244D3F] font-medium text-xl mb-4">
                            Quick Check-In
                        </h2>
                        <ActionButtons friend={friend.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default friendDetailPage;
