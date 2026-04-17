"use client";

import Image from "next/image";
import callPng from "../assets/call.png";
import textPng from "../assets/text.png";
import videoPng from "../assets/video.png";
import { TimeLineContext } from "@/context/timeline.context";
import { useContext, useState } from "react";
import Link from "next/link";

const TimelineStates = () => {
    const { timeLineState } = useContext(TimeLineContext);
    const [filter, setFilter] = useState("All");

    const filteredData =
        filter === "All"
            ? timeLineState
            : timeLineState.filter((item) => item.type === filter);

    return (
        <div className="space-y-4">
            <div className="flex mb-4">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-[#244D3F] cursor-pointer shadow-sm"
                >
                    <option value="All">All</option>
                    <option value="Call">Calls</option>
                    <option value="Text">Texts</option>
                    <option value="Video">Videos</option>
                </select>
            </div>

            {filteredData.map((state, ind) => (
                <div
                    key={ind}
                    className="bg-white rounded-md shadow-sm p-4 flex gap-4 items-center"
                >
                    <Image
                        src={
                            state.type === "Call"
                                ? callPng
                                : state.type === "Text"
                                  ? textPng
                                  : videoPng
                        }
                        alt={state.type}
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className="space-x-2 text-[#64748B]">
                            <span className="text-xl font-medium text-[#244D3F]">
                                {state.type}
                            </span>
                            <span>with {state.name}</span>
                        </p>
                        <p className="text-[#64748B] mt-1">{state.date}</p>
                    </div>
                </div>
            ))}

            {filteredData.length === 0 && (
                <div className="bg-white rounded-md shadow-sm p-20 text-xl text-center text-gray-400">
                    <p>No {filter !== "All" ? filter : ""} Analytics</p>
                    <Link href="/" className="btn bg-[#244D3F] text-white mt-5">
                        Go back home
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TimelineStates;
