import React from "react";
import Image from "next/image";

const FriendCard = ({friend}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center flex flex-col items-center">
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className="rounded-full mb-3"
      />
      <h1 className="font-semibold text-xl mb-2">{friend.name}</h1>
      <div
        className={`badge text-white font-medium rounded-full ${friend.status === "overdue" && "bg-[#EF4444]"} ${friend.status === "on-track" && "bg-[#244D3F]"} ${friend.status === "almost due" && "bg-[#EFAD44]"}`}
      >
        {friend.status}
      </div>
      <div className="flex flex-wrap gap-1 justify-center items-center mt-2 mb-3">
        {friend.tags.map((t, i) => (
          <div
            key={i}
            className="badge text-[#244D3F] bg-[#CBFADB] font-medium rounded-full"
          >
            {t}
          </div>
        ))}
      </div>
      <p className="text-[#64748B] font-medium mb-3"><em>{`"${friend.bio}"`}</em></p>
      <p className="text-[#64748B] text-sm">{`Preferred: ${friend.email}`}</p>
    </div>
  );
};

export default FriendCard;
