const Blog = () => {
  const blogData = {
    title: "10 reasons why US should be on \n your bucket list",
    description:
      "Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod tempor ",
  };
  const images = ["bike1.png", "bike2.png", "bike3.png"];
  return (
    <div
      id="blog"
      className="flex flex-col w-full items-center justify-center gap-10 py-10"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-bebas text-6xl uppercase text-[#1a1919] text-center font-bold tracking-wide">
          Travel Blog
        </h1>
        <p className="font-lato text-center text-[#1a1919] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore <br />
          et dolore magna aliqua.Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="flex items-center justify-center gap-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col gap-1">
            <img
              src={`/public/images/${image}`}
              alt=""
              className="w-[350px] h-[350px] object-cover"
            />
            <h2 className="leading-7 text-2xl whitespace-pre-line text-[#202020] font-helvetica">
              {blogData.title}
            </h2>
            <p className="whitespace-pre-line  leading-5 text-[#676767] font-lato">
              {blogData.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
