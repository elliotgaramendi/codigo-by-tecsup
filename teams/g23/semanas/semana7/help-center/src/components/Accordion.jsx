import PropTypes from 'prop-types';

const Accordion = ({ accordionId, handleAccordionClick, data }) => {
  const { id, question, answer } = data;
  return (
    <li className={`accordion ${accordionId === id ? 'accordion--active' : ''}`}>
      <h2
        className="accordion__question button button--primary flexbox flexbox--centered-sides"
        onClick={() => { handleAccordionClick(id) }}
      >
        {question}
        <span className="accordion__icon">🔻</span>
      </h2>
      <p className="accordion__answer">{answer}</p>
    </li>
  );
};

Accordion.propTypes = {
  accordionId: PropTypes.number,
  handleAccordionClick: PropTypes.func,
  data: PropTypes.object
};

export default Accordion;
