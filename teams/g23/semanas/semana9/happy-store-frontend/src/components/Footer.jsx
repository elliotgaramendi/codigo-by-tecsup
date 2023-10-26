/* eslint-disable react/prop-types */

const Footer = ({ filters }) => {
  return (
    <footer className="fixed bottom-4 left-4">
      <button className="py-2 px-8 mt-auto rounded-2xl bg-sky-500/50 font-semibold transition-colors hover:bg-sky-400/50">{JSON.stringify(filters)}</button>
    </footer>
  );
}

export default Footer;