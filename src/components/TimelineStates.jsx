"use client";

import Image from "next/image";
import callPng from "../assets/call.png";
import textPng from "../assets/text.png";
import videoPng from "../assets/video.png";
import { TimeLineContext } from "@/context/timeline.context";
import { useContext } from "react";

const TimelineStates = () => {
    const { timeLineState } = useContext(TimeLineContext);
    return (
        <div className="space-y-4">
            {timeLineState.map((state, ind) => (
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
                        alt="Call Png"
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
            {timeLineState.length === 0 && (
                <div className="bg-white rounded-md shadow-sm p-20 text-xl text-center">
                    No Timeline Stats
                </div>
            )}
        </div>
    );
};

export default TimelineStates;
