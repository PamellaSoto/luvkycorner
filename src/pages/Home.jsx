import tempProfile from "/temp.jpg";
import { FaInstagram, FaDiscord, FaInfoCircle, FaCommentsDollar, FaImages, FaEnvelope, FaCalendarDay } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import Button from "../components/Button.jsx";

export default function Home() {
  return (
    <main>
      <div className="content gap-4 py-8 px-6 shadow-xl md:w-[60vw] lg:w-[40vw] lg:max-h-[50vw]">
        <img
          src={tempProfile}
          alt="luvky profile"
          className="w-32 h-32 rounded-full object-cover mb-6"
        />
        <h1 className="text-3xl font-bold" >☆ luvky's corner</h1>
        <a className="md:text-xl text-[#6D37BE]/60 italic -mt-2 md:-mt-4" href="https://instagram.com/luvkyart" target="_blank" rel="noreferrer">@luvkyart</a>
        <div className="flex gap-3 mb-4">
          <a href="https://ko-fi.com/luvky" target="_blank" rel="noreferrer" >
            <SiKofi className="hover:text-[#6D37BE] transition-all transition-duration-200" size={24} />
          </a>
          <a href="https://www.instagram.com/luvkyart/" target="_blank" rel="noreferrer" >
            <FaInstagram className="hover:text-[#6D37BE] transition-all transition-duration-200" size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" >
            <FaDiscord className="hover:text-[#6D37BE] transition-all transition-duration-200" size={24} />
          </a>
          <a href="mailto:ameaimoon@gmail.com" target="_blank" rel="noreferrer" >
            <FaEnvelope className="hover:text-[#6D37BE] transition-all transition-duration-200" size={24} />
          </a>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-4">
          <Button goTo="portfolio" label="my portfolio" icon={FaImages} />
          <Button goTo="tos" label="terms of service" icon={FaInfoCircle} />
          <Button goTo="https://ko-fi.com/luvky/commissions" label="commissions (ko-fi)" icon={FaCommentsDollar} />
          <Button goTo="queue" label="current queue" icon={FaCalendarDay} />
          <Button goTo="contact" label="contact me" icon={FaEnvelope} />
        </div>
      </div>
    </main>
  )
}