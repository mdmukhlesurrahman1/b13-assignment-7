"use client";

import { TimeLineContext } from "@/context/timeline.context";
import Link from "next/link";
import { useContext, useMemo } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const Stats = () => {
    const { timeLineState } = useContext(TimeLineContext);

    const chartData = useMemo(() => {
        const counts = timeLineState.reduce((acc, item) => {
            const type = item.type || "Other";
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});

        return Object.keys(counts).map((key) => ({
            name: key,
            value: counts[key],
        }));
    }, [timeLineState]);

    return (
        <div className="w-full">
            {timeLineState.length === 0 ? (
                <div className="bg-white rounded-md shadow-sm p-20 text-xl text-center text-gray-400">
                    <p>No Friendship Analytics</p>
                    <Link href="/" className="btn bg-[#244D3F] text-white mt-5">
                        Go back home
                    </Link>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="h-85 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={2}
                                    dataKey="value"
                                    label={({ name, percent }) =>
                                        `${name} ${(percent * 100).toFixed(0)}%`
                                    }
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: "8px",
                                        border: "none",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                    }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;
