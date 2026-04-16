"use client";
import { TimeLineContext } from "@/context/timeline.context";
import React, { useContext } from "react";
import { FiVideo } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const ActionButtons = ({ friend }) => {
    const textToast = () => toast.success(`Text with ${friend}`);
    const videoToast = () => toast.success(`Video with ${friend}`);

    const { timeLineState, setTimeLineState } = useContext(TimeLineContext);

    const formatDateTime = () => {
        const now = new Date();

        const day = now.getDate();

        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const month = monthNames[now.getMonth()];

        const year = now.getFullYear();
        const time = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        const finalString = `${day} ${month} ${year}, ${time}`;
        return finalString;
    };

    const handleCall = () => {
        const savedTime = formatDateTime();
        const timelineData = {
            name: friend,
            type: "Call",
            date: savedTime,
        };

        setTimeLineState([...timeLineState, timelineData]);

        toast.success(`Call with ${friend}`);
    };

    const handleText = () => {
        const savedTime = formatDateTime();
        const timelineData = {
            name: friend,
            type: "Text",
            date: savedTime,
        };

        setTimeLineState([...timeLineState, timelineData]);

        toast.success(`Text with ${friend}`);
    };

    const handleVideo = () => {
        const savedTime = formatDateTime();
        const timelineData = {
            name: friend,
            type: "Video",
            date: savedTime,
        };

        setTimeLineState([...timeLineState, timelineData]);

        toast.success(`Video with ${friend}`);
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            <div
                onClick={handleCall}
                className="bg-base-200 p-4 rounded-md flex flex-col justify-center items-center shadow-sm text-3xl hover:bg-base-300 cursor-pointer active:scale-98"
            >
                <LuPhoneCall />
                <p className="mt-2 text-lg font-semibold select-none">Call</p>
            </div>
            <div
                onClick={handleText}
                className="bg-base-200 p-4 rounded-md flex flex-col justify-center items-center shadow-sm text-3xl hover:bg-base-300 cursor-pointer active:scale-98"
            >
                <MdOutlineTextsms />
                <p className="mt-2 text-lg font-semibold select-none">Text</p>
            </div>
            <div
                onClick={handleVideo}
                className="bg-base-200 p-4 rounded-md flex flex-col justify-center items-center shadow-sm text-3xl hover:bg-base-300 cursor-pointer active:scale-98"
            >
                <FiVideo />
                <p className="mt-2 text-lg font-semibold select-none">Video</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ActionButtons;
