import Main from "./_components/_home/Main";
import Hero from "./_components/_home/Hero";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="absolute h-96 w-full -mt-96 bg-gradient-to-b from-[#3330] via-[#080808b9] to-[#080808] " />
      <div className="container w-screen mt-5 bg-[#080808]">
        <Main />
      </div>
      <div className="mt-auto">
        <Footer/>
      </div>
    </div>
  );
}
