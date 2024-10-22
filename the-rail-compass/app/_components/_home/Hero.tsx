import VideoPlayer from "./VidPlayer";

const Hero = () => {
  const title = "The Rail Compass";
  const subtitle = "Your ultimate guide to trains around the world.";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <VideoPlayer />
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-4">
          {title.split("").map((char, index) => (
            <span
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-white">
          {subtitle.split("").map((char, index) => (
            <span
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Hero;
