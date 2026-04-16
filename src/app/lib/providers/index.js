"use client";
import TimeLineProvider from "@/context/timeline.context";

const Providers = ({ children }) => {
  return <TimeLineProvider>
    {children}
  </TimeLineProvider>
};

export default Providers;
