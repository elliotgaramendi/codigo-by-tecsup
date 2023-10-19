/* eslint-disable react/prop-types */
const Hero = ({ data: { title, image } }) => {
  return (
    <section className="relative min-h-[37.5vh] flex">
      <img
        src={image}
        alt={title}
        width={1920}
        height={1080}
        className="absolute -z-10 w-full h-full object-cover opacity-75"
      />
      <div className="container px-2 mx-auto flex items-center justify-center">
        <h1 className="text-5xl text-center font-black">{title}</h1>
      </div>
    </section>
  );
};

export default Hero;