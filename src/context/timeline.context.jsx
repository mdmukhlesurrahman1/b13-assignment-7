"use client";
import { createContext, useState } from "react";

export const TimeLineContext = createContext();

const TimeLineProvider = ({ children }) => {
  const [timeLineState, setTimeLineState] = useState([]);

  const data = {
    timeLineState,
    setTimeLineState,
  };

  return (
    <TimeLineContext.Provider value={data}>
      {children}
    </TimeLineContext.Provider>
  );
};

export default TimeLineProvider;
