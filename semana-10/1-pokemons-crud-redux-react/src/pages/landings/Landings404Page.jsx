import { Link, useNavigate } from 'react-router-dom';
import '../../styles/css/Landings404Page.css';

const Landings404Page = () => {
  const navigate = useNavigate();
  return (
    <section className="l-404-page">
      <div className="l-404-page__container">
        <figure className="l-404-page__image-container">
          <svg className="l-404-page__image" width="256px" height="336px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="l404PagePolygon1" stroke="#007FB2" strokeWidth="6"></path>
              <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="l404PagePolygon2" stroke="#EF4A5B" strokeWidth="6"></path>
              <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="l404PagePolygon3" stroke="#795D9C" strokeWidth="6"></path>
              <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="l404PagePolygon4" stroke="#F2773F" strokeWidth="6"></path>
              <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="l404PagePolygon5" stroke="#36B455" strokeWidth="6"></path>
            </g>
          </svg>
        </figure>
        <div className="l-404-page__message-container">
          <h1 className="l-404-page__message-title">404</h1>
          <p className="l-404-page__message-paragraph">Page not found</p>
          <div className="l-404-page__message-link-container">
            <button
              className="l-404-page__message-link l-404-page__message-link--active"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <Link to="/pokemons" className="l-404-page__message-link">Go to Home Page</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landings404Page;