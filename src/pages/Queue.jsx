import { FaArrowLeft } from "react-icons/fa";

export default function Queue() {
  return (
    <main>
      <div className="relative content gap-4 py-8 px-6 shadow-xl h-[75vh] md:w-[60vw] lg:w-[40vw] md:max-h-[50vw]">
        <a className="absolute top-10 left-6" href="/"><FaArrowLeft className="hover:text-[#6D37BE] transition-all transition-duration-200" size={20} /></a>
        <h1 className="text-3xl font-bold">☆ current queue</h1>

        <table className="mt-6 md:w-11/12">
          <thead>
            <tr className="font-semibold text-xs md:text-base uppercase text-[#6D37BE] border-b-2 border-[#6D37BE] text-left">
              <td>username</td>
              <td>order</td>
              <td>payment</td>
              <td>progress</td>
            </tr>
          </thead>
          <tbody>
            {/* status list:
            - planning
            - waiting for payment
            - sketching
            - coloring
            - rendering
            - background
            - waiting for feedback */}
            <tr>
              <td className="text-xs md:text-base">teste</td>
              <td className="text-xs md:text-base">nikki's portrait</td>
              <td className="text-xs md:text-base">sent!</td>
              <td className="text-xs md:text-base">waiting for feedback</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}