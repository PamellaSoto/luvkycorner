import { FaArrowLeft } from "react-icons/fa";

export default function Portfolio() {
  return (
    <main>
      <div className="relative content gap-4 py-8 px-6 shadow-xl h-[75vh] md:w-[60vw] lg:w-[40vw] md:max-h-[50vw]">
        <a className="absolute top-10 left-6" href="/"><FaArrowLeft className="hover:text-[#6D37BE] transition-all transition-duration-200" size={20} /></a>
        <h1 className="text-3xl font-bold">☆ portfolio</h1>
        <div className="mt-6 w-full gap-4 columns-2 md:columns-3 overflow-y-scroll pr-4">
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/400x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/600x700/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x600/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x400/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/600x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
          <img className="h-auto max-w-full rounded-lg mb-4" src="https://placehold.co/300x300/EEE/31343C" alt="" />
        </div>
      </div>
    </main>
  )
}