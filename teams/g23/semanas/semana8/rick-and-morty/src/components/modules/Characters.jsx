/* eslint-disable react/prop-types */
const Characters = ({ data }) => {
  return (
    <section className="py-8">
      <div className="container px-2 mx-auto flex flex-col gap-8">
        <h2 className="text-teal-500 text-3xl text-center font-extrabold">Personajes</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-6">
          {data?.map(element => {
            const { id, name, status, species, type, gender, origin, location, image, episode, url, created } = element;
            return (
              <div
                key={id}
                className="rounded-2xl overflow-hidden flex flex-col"
              >
                <img
                  src={image}
                  alt={name}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover"
                />
                <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
                  <a href={url}>
                    <h3 className="text-2xl font-bold">{name}</h3>
                  </a>
                  <h4 className="text-base font-semibold">{status === 'Alive' ? '😀' : '💀'} {status} - {species} - {gender} {type ? `- ${type}` : ''}</h4>
                  <a href={origin.url} className="text-sm"><span className="font-bold">Origen:</span> {origin.name}</a>
                  <a href={location.url} className="text-sm"><span className="font-bold">Ubicación:</span> {location.name}</a>
                  <span className="text-sm"><span className="font-bold">Creado:</span> {created}</span>
                  <a href={episode[0]} className="py-2 px-8 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950">Primera aparición</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;