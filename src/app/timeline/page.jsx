import TimelineStates from "@/components/TimelineStates";

const TimeLinePage = () => {
    return (
        <div className="mx-auto w-11/12 md:w-9/12 max-w-277.5">
            <h1 className="font-bold text-3xl lg:text-5xl text-[#1F2937] mb-4">
                Timeline
            </h1>
            <TimelineStates />
        </div>
    );
};

export default TimeLinePage;
