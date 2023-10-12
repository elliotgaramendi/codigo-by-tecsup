import PropTypes from 'prop-types';

const Card = ({ data }) => {
  const { title, image, text } = data;

  return (
    <div className="card card--flip">
      <div className="card__body card__body--flip">
        <div className="card__face">
          <img src={image} alt={title} width={96} height={96} className="img img--flip" />
          <h3 className="card__title">{title}</h3>
        </div>
        <div className="card__face">
          <p className="card__text">{text}</p>
          <a href="#" className="button button--primary">Ver preguntas</a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object
};

export default Card;