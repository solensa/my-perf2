<Image
        src="/gradient.png"
        alt=""
        width={800}
        height={271}
        className="absolute top-[570px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Strategic Priorities Section */}
      <div className="w-full max-w-6xl mb-12 z-10">
        {/* Decorative lines */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-center mb-4 relative z-10">
            Our FY27 Delivery Plan
          </h2>

          <div className="absolute w-full max-w-6xl h-[193px] -top-20 left-1/2 -translate-x-1/2 pointer-events-none">
            <Image
              src="/lines2.svg"
              alt=""
              width={830}
              height={167}
              className="w-full h-full opacity-40"
              priority
            />
          </div>
        </div>
        <p className="text-center max-w-3xl mx-auto mb-8">
          When setting your goals, you&apos;ll be able to select a category under these priorities
          to ensure alignment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Develop Our People */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#019cde] to-[#189fac] p-3 flex justify-center">
              <Image src="/people.svg" alt="Check" width={56} height={56} className="text-white" />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">People Ambition</h3>
              <p>Ensure our people thrive.</p>
            </div>
          </div>

          {/* Improve Delivery Consistency */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#1a9fa8] to-[#2B8E6A] p-3 flex justify-center">
              <Image
                src="/consistent.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">Improve Delivery Consistency</h3>
              <p>Via metrics, execution plans, tech & training.</p>
            </div>
          </div>

          {/* Invest in Growth */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#33A273] to-[#4AA441] p-3 flex justify-center">
              <Image src="/growth.svg" alt="Check" width={56} height={56} className="text-white" />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">Invest in Growth</h3>
              <p>Focusing on Nuclear, STBGs, Strategic Solutions.</p>
            </div>
          </div>

          {/* Drive Sustainability */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#4DA43D] to-[#64A70B] p-3 flex justify-center">
              <Image src="/leaf.svg" alt="Check" width={56} height={56} className="text-white" />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">Drive Sustainability</h3>
              <p>Deliver ESG commitments and create value.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Button */}
      <a
        href="https://laingorourke.sharepoint.com/sites/igate/Pages/our-strategy.aspx"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#FFCD00] hover:bg-[#e0a930] text-black font-medium py-3 px-8 rounded-md transition-colors cursor-pointer"
      >
        Review Our Strategy
      </a>
