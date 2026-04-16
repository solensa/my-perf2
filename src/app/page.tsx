import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-12 z-10">
        <h1 className="text-4xl font-bold">What Everyone Should Have</h1>
      </div>

      {/* Goals Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 z-10">
        {/* Performance Goals */}
        <div className="bg-white rounded-lg overflow-hidden text-black relative hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#009CDE] to-[#00A7B5]"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/blue-tick.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <h2 className="text-2xl font-bold">Performance Goals</h2>
            </div>

            <p className="mb-12">Aligned with FY27 Strategic Priorities, aim for 4-6.</p>

            <div className="bg-[#D7F3FF] rounded-lg p-4 mb-4 border border-[#91DEFF]">
              <p className="text-[#12536E]">
                <span className="font-bold">Pro-tip: </span>
                Make your goals SIMple - Specific, Important, Measurable. Ask the SuccessFactors AI
                Coach to help!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="bg-white rounded-lg overflow-hidden text-black relative hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#50A684] to-[#64A70B]"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/green-tick.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <h2 className="text-2xl font-bold">Learning Goals</h2>
            </div>

            <p className="mb-6">
              Focused on developing knowledge, skills and behaviours. Aim for 1-2 goals.
            </p>

            <div className="bg-[#DAFCEF] rounded-lg p-4 mb-4 border border-[#A6E4CB]">
              <p className="text-[#126443]">
                <span className="font-bold">Pro-tip: </span>
                Chat with the{" "}
                <Link
                  href="https://www.linkedin.com/learning/ai-coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0B941] hover:underline"
                >
                  LinkedIn Learning Coach
                </Link>{" "}
                to explore what you could learn. You can also attach learning to you Learning Goal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
