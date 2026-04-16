import Image from "next/image";
import Link from "next/link";

const Friends = async () => {
    const res = await fetch("https://keen-keeper-one.vercel.app/friends.json");
    const friends = await res.json();

    return (
        <div>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-left">
                Your Friends
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {friends.map((friend) => (
                    <Link
                        href={`/friend/${friend.id}`}
                        key={friend.id}
                        className="card bg-white shadow-sm hover:-translate-y-1"
                    >
                        <figure className="pt-6">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{friend.name}</h2>
                            <p className="text-[#64748B] text-sm">
                                {friend.days_since_contact} d ago
                            </p>
                            <div className="flex flex-wrap gap-1 justify-center items-center">
                                {friend.tags.map((t, i) => (
                                    <div
                                        key={i}
                                        className="badge text-[#244D3F] bg-[#CBFADB] font-medium rounded-full"
                                    >
                                        {t}
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`badge text-white font-medium rounded-full ${friend.status === "overdue" && "bg-[#EF4444]"} ${friend.status === "on-track" && "bg-[#244D3F]"} ${friend.status === "almost due" && "bg-[#EFAD44]"}`}
                            >
                                {friend.status}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Friends;
