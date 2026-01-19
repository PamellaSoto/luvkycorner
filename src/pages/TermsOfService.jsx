import { FaArrowLeft } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <main>
      <div className="relative content gap-4 py-8 px-6 shadow-xl h-[75vh] md:w-[60vw] lg:w-[40vw] md:max-h-[50vw]">
        <a className="absolute top-10 left-6" href="/"><FaArrowLeft className="hover:text-[#6D37BE] transition-all transition-duration-200" size={20} /></a>
        <h2 className="md:hidden text-3xl font-bold text-[#6D37BE]">☆ TOS ☆</h2>
        <h1 className="hidden md:block text-3xl font-bold text-[#6D37BE]">☆ terms of service ☆</h1>

        <div className="overflow-y-scroll pr-4 px-4 md:px-8">
          <h2 className="text-xl text-center my-6 font-bold text-[#6D37BE] ">GENERAL</h2>
          <ol className="-mt-4 flex gap-2 flex-col list-decimal text-sm md:text-base">
            <li>English is not my native language.</li>
            <li>Communication may be slower at times due to time zone differences, but I will always respond as soon as possible.</li>
            <li>You can track your commission progress on my website at any time.</li>
            <li>I reserve the right to decline or cancel a commission at any time. In this case, a full refund will be provided and the reason will be explained.</li>
            <li>I accept both image references and text descriptions. Please provide clear and detailed information through the <a className="underline" href="https://forms.gle/xCW3Y4xS4muFdvaE7">Google Form</a>.</li>
            <li>Feedback is always welcome and encouraged throughout the process.</li>
          </ol>

          <h2 className="text-xl text-center my-6 font-bold text-[#6D37BE]">PROCESS AND DEADLINES</h2>
          <ol className="-mt-4 flex gap-2 flex-col list-decimal text-sm md:text-base">
            <li>The estimated completion time is up to 1 month, depending on complexity and personal circumstances (health, school or family matters). You will be informed if any delays occur.</li>
            <li>Progress updates are usually sent every 3–5 days, depending on the complexity of the commission.</li>
            <li>Payment is required upfront via <a className="underline" href="https://ko-fi.com/luvky/commissions">Ko-Fi</a>.</li>
            <li>You may request unlimited changes during the sketch phase.</li>
            <li>After lineart or painting begins, only minor changes are allowed and may take additional time.</li>
          </ol>
          
          <p className="mt-6 text-sm md:text-base">Thank you so much for reading and for supporting my work!</p>
          </div>
      </div>
    </main>
  )
}