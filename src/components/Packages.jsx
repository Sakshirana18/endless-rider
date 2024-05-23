const Packages = () => {
  const packagesData = [
    {
      title: "Motorcycle Expeditions",
      img: "package-img-1.png",
    },
    {
      title: "Mountains Motorcycle Tours ",
      img: "package-img-2.png",
    },
    {
      title: "Motorcycle Adventure Tours ",
      img: "package-img-3.png",
    },
  ];
  return (
    <div
      id="destinations"
      className="w-full flex items-center justify-center gap-8"
    >
      {packagesData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-center gap-4"
        >
          <img src={`/images/${data.img}`} alt="" />
          <h5 className="font-helvetica text-2xl tracking-wider text-[#202020]">
            {data.title}
          </h5>
          <p className="text-lg leading-6 text-[#676767] font-medium font-lato">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna <br />{" "}
            aliqua.
          </p>
          <button className="w-28 h-9 rounded-2xl bg-[#cd0a2d] text-white text-xl font-bebas font-bold tracking-wider">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};
export default Packages;
