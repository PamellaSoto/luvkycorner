import oldArt from "/oldart.png";
import oldArt2 from "/oldart2.png"
import { FaArrowLeft } from "react-icons/fa";

export default function Portfolio() {
  return (
    <main>
      <div className="relative content gap-4 py-8 px-6 shadow-xl h-[75vh] md:w-[60vw] lg:w-[40vw] md:max-h-[50vw]">
        <a className="absolute top-10 left-6" href="/"><FaArrowLeft className="hover:text-[#6D37BE] transition-all transition-duration-200" size={20} /></a>
        <h1 className="text-3xl font-bold text-[#6D37BE]">☆ portfolio ☆</h1>
        <div className="mt-6 w-full gap-4 columns-2 overflow-y-scroll pr-4">
          <img className="h-auto max-w-full rounded-lg mb-4" src={oldArt} />
          <img className="h-auto max-w-full rounded-lg mb-4" src={oldArt2} />
        </div>
      </div>
    </main>
  )
}