const Alert = ({ alert }) => {
  const { name, message } = alert;
  return (
    <section className="fixed z-40 left-1/2 top-8 -translate-x-1/2">
      <div className={`flex items-center gap-2 rounded p-2 ${alert.name !== 'AxiosError' ? 'bg-cyan-300/75 text-black' : 'bg-rose-500/75 text-white'}`} role="alert">
        <h3 className="bg-white text-black rounded px-2 py-1 font-bold">{name}</h3>
        <p className="font-semibold">{alert.response?.data.message} [{message}]</p>
      </div>
    </section>
  );
};

export default Alert;