const Features = () => {
  return (
    <div className="w-full flex flex-col relative items-center justify-center mb-32">
      <div className="relative w-full object-cover">
        <img src="public/images/Features.png" alt="" className="" />
      </div>
      <div className="w-full h-full absolute flex flex-col justify-between">
        <div
          id="motorcycles"
          className="w-full flex flex-col items-center justify-center gap-4 mt-16">
          <h1 className="text-6xl uppercase font text-white font-bold">
            Guided Motorcycle Tours{" "}
            <span className="text-[#cd0a2d]">Since 1880.</span>
          </h1>
          <p className="text-center text-lg text-white font-medium font-lato leading-7 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br/> et dolore magna
            aliqua.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-full flex relative items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-16 w-1/2 bg-[#cd0a2d] h-[400px]">
            <div className="flex gap-10 pt-8">
              <p className="uppercase text-5xl font-bebas font-bold text-white leading-[30px]">
                1000km <br/>
                <span className="text-3xl ml-8">2 Days</span>
              </p>
              <p className="uppercase text-7xl font-bebas font-bold text-white leading-[45px]">
                3000km <br/>
                <span className="text-5xl ml-8">7 Days</span>
              </p>
            </div>
            <p className="text-lg leading-7 text-white font-lato text-center font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> do eiusmod tempor incididunt ut labore et dolore magna{" "}
              <br />
              aliqua.Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img
            src="/images/bike4.png"
            alt=""
            className="absolute object-cover h-[620px]"
          />
          <div className="flex flex-col items-center justify-center gap-16 h-[400px] w-1/2 bg-transparent">
            <div className="flex gap-10 pt-8">
              <p className="uppercase text-7xl font-bebas font-bold text-white leading-[35px]">
                50+ <br />
                <span className="text-4xl">Countries</span>
              </p>
              <p className="uppercase text-5xl font-bebas font-bold text-white leading-[30px]">
                1000km <br />
                <span className="text-3xl ml-8">2 Days</span>
              </p>
            </div>
            <p className="text-lg leading-7 text-white font-lato text-center font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> do eiusmod tempor incididunt ut labore et dolore magna{" "}
              <br />
              aliqua.Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
