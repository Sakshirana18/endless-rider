const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#ededed] flex flex-col items-center justify-center mt-32  text-center gap-4">
        <h1 className="text-black font-bebas text-7xl uppercase">
          we are <span className="text-[#cd0a2d]">worldwide</span>
        </h1>
        <p className="font-lato text-[#5d5c5c] leading-6">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore <br /> et dolore magna aliqua.Lorem ipsum
          dolor sit amet.
        </p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="w-[550px] h-[400px] bg-white flex items-center justify-center flex-col gap-5">
          <div className="flex items-center justify-center gap-4">
            <img src="/public/images/Testimonials2.png" alt="" />
            <div className="flex flex-col text-center">
              <h2 className="text-[#212121] font-bebas leading-6 text-3xl">
                john smith
              </h2>
              <h5 className="text-[#636262] font-bebas leading-6 text-2xl">
                solo traveller
              </h5>
            </div>
          </div>
          <p className="flex items-center justify-center text-center font-lato italic text-lg text-[#212121] leading-7 font-semibold tracking-wider">
            ”Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore et <br /> dolore magna
            aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation
            ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat. Duis
            aute irure dolor in <br /> reprehenderit in voluptate velit esse
            cillum dolore eu <br /> fugiat nulla pariatur.”
          </p>
        </div>
        <img src="public/images/Testimonials.png" alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
