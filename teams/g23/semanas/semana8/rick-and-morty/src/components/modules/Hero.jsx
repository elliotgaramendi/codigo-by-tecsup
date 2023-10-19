const Hero = () => {
  return (
    <section className="relative min-h-[37.5vh] flex">
      <img
        src="https://images.alphacoders.com/133/thumb-1920-1330376.png"
        alt="Rick and Morty"
        width={1920}
        height={1080}
        className="absolute -z-10 w-full h-full object-cover opacity-75"
      />
      <div className="container px-2 mx-auto flex items-center justify-center">
        <h1 className="text-5xl text-center font-black">Rick and Morty</h1>
      </div>
    </section>
  );
};

export default Hero;