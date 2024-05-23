const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full h-max flex flex-col items-center justify-center mb-10"
    >
      <div className="relative w-full flex flex-col">
        <img
          src="/images/hero-img-1.png"
          alt=""
          className="object-cover w-full -translate-x-4 -translate-y-4"
        />
        <img
          src="/images/hero-img-2.png"
          alt=""
          className="absolute top-0 right-0 translate-x-24 -translate-y-10"
        />
      </div>
      <div className="w-full h-full absolute flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 mt-16">
          <p className="font-billy-ohio text-center text-[116px] leading-[96px] text-white">
            2,500 tours in over 100 destinations <br /> and 36 years of
            experience!
          </p>
          <img
            src="/images/hero-bike.png"
            alt=""
            className="h-[480px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
