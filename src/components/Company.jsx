const Company = () => {
  const companyData = {
    title: "10 reasons why USA.",
    description:
      "Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod tempor incididunt ",
  };
  const expData = {
    title: "Main Rider",
    description: "Lorem ipsum dolor amet,\n consectetur adipielit. Sunt sed",
  };
  const images = ["rider1.png", "rider2.png", "rider3.png"];
  const names = ["Alex Doe", "Steve Doe", "Bill Doe"];
  const arr = Array(3).fill(companyData);
  const members = Array(3).fill(expData);

  return (
    <div
      id="rentals"
      className="relative w-full h-full flex items-center justify-start py-16"
    >
      <div className="relative w-[750px] h-[500px] bg-[#cd0a2d] p-10 text-center">
        <div className="relative flex flex-col gap-8 items-start pl-40">
          <h1 className="text-[#fcfbfb] text-6xl uppercase font-bebas">
            we are worldwide
          </h1>
          <div className="flex flex-col gap-6 text-white text-lg text-left">
            {arr.map((data, index) => (
              <div
                key={index}
                className="flex flex-col whitespace-pre-line gap-2"
              >
                <h5 className="tracking-widest font-helvetica">{data.title}</h5>
                <p className="font-lato opacity-[0.6]">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src="public/images/Company1.png"
        alt=""
        className="absolute top-0 left-[37rem]"
      />
      <div className="w-[850px] h-[500px] bg-white flex mt-16 flex-col justify-center ">
        {members.map((set, index) => (
          <div
            key={index}
            className={`flex w-full items-center justify-center text-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="flex">
              {index % 2 === 0 && (
                <img
                  src={`public/images/${images[index]}`}
                  alt={names[index]}
                  className="w-28 h-28"
                />
              )}
              <div className="flex flex-col text-left p-5 items-start justify-center">
                <div className="flex gap-5 justify-center items-center">
                  <p className="text-[#5e5e5e] text-4xl uppercase tracking-tight font-bebas ">
                    {names[index]}
                  </p>
                  <h5 className="text-right text-[#979797] text-2xl font-bebas uppercase">
                    {set.title}
                  </h5>
                </div>
                <p className="whitespace-pre-line text-[#040404] opacity-[0.659] text-lg leading-5 font-lato">
                  {set.description}
                </p>
              </div>
              {index % 2 !== 0 && (
                <img
                  src={`public/images/${images[index]}`}
                  alt={names[index]}
                  className="w-28 h-28"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
