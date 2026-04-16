import Banner from "@/components/Banner";
import Friends from "@/components/Friends";


export default function Home() {
  return (
    <div className="mx-auto w-11/12 md:w-9/12 max-w-277.5">
      <main className="text-center">

        <Banner />
        <hr className="opacity-20" />
        <Friends />

      </main>
    </div>
  );
}
