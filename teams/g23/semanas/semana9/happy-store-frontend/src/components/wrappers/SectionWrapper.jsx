/* eslint-disable react/prop-types */

const SectionWrapper = ({ children }) => {
  return (
    <section className="py-10">
      <div className="container px-4 mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;