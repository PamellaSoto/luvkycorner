import { FaArrowLeft, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

export default function Contact() {
  return (
    <main>
      <div className="w-full relative content gap-4 py-8 px-6 shadow-xl h-[75vh] md:h-auto md:w-[60vw] lg:w-[40vw] md:max-h-[50vw]">
        <a className="absolute top-10 left-6" href="/"><FaArrowLeft className="hover:text-[#6D37BE] transition-all transition-duration-200" size={20} /></a>
        <h1 className="text-3xl font-bold text-[#6D37BE]">☆ contact info ☆</h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full justify-center mt-6">
          <a className="hover:text-[#6D37BE] flex flex-col items-center gap-2" href="https://ko-fi.com/luvky" target="_blank" rel="noreferrer" >
            <SiKofi className="transition-all transition-duration-200" size={40} />
            <p className="underline text-lg">Ko-Fi</p>
          </a>

          <a className="hover:text-[#6D37BE] flex flex-col items-center gap-2" href="https://www.instagram.com/luvkyart/" target="_blank" rel="noreferrer" >
            <FaInstagram className="transition-all transition-duration-200" size={40} />
            <p className="underline text-lg">Instagram</p>
          </a>
          
          <a className="hover:text-[#6D37BE] flex flex-col items-center gap-2" href="#" target="_blank" rel="noreferrer" >
            <FaDiscord className="transition-all transition-duration-200" size={40} />
            <p className="underline text-lg">Discord</p>
          </a>
          
          <a className="hover:text-[#6D37BE] flex flex-col items-center gap-2" href="mailto:ameaimoon@gmail.com" target="_blank" rel="noreferrer" >
            <FaEnvelope className="transition-all transition-duration-200" size={40} />
            <p className="underline text-lg">Email</p>
          </a>
        </div>
      </div>
    </main>
  )
}