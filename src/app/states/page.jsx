import Stats from "@/components/Stats";

const StatesPage = () => {
    return (
        <div className="mx-auto w-11/12 md:w-9/12 max-w-277.5 space-y-6">
            <h1 className="font-bold text-3xl lg:text-5xl text-[#1F2937]">
                Friendship Analytics
            </h1>
            <Stats />
        </div>
    );
};

export default StatesPage;
