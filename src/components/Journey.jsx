const Journey = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      <img
        src="public/images/background_1.png"
        alt=""
        className="w-full object-fit"
      />
      <div className="absolute text-white w-full h-full flex items-center justify-center flex-col mt-32 gap-16">
        <div className="gap-6 flex flex-col">
          <h1 className="font-bebas text-6xl text-center">
            Start Your Journey
          </h1>
          <p className="text-center font-lato text-[#fefefe] leading-7 tracking-wider text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            <br /> et dolore magna aliqua.Lorem ipsum dolor sit amet.
          </p>
        </div>
        <img src="public/images/logo.png" alt="" />
      </div>
    </div>
  );
};

export default Journey;
