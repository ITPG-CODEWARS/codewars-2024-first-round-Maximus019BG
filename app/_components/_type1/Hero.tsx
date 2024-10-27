import Image, { StaticImageData } from 'next/image';

interface HeroProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
    <Image 
      src={image} 
      alt="Background Image" 
      className="absolute top-0 left-0 w-full h-full object-cover sm:object-top"
      layout="fill" 
      objectFit="cover" 
      objectPosition="center"
      quality={100} 
    />
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-bold mb-4">
          {title.split("").map((char, index) => (
            <span
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-white">
          {subtitle.split("").map((char, index) => (
            <span
              key={index}
              className="opacity-0 animate-fadeInRight"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
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