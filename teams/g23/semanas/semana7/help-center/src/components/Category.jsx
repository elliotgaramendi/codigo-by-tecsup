import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesData } from "../utils/dataUtil";
import Accordion from "./Accordion";

const Category = () => {
  const { slug } = useParams();

  const [category, setCategory] = useState({});
  const [accordionId, setAccordionId] = useState(0);

  const handleAccordionClick = id => accordionId !== id ? setAccordionId(id) : setAccordionId(0);

  useEffect(() => {
    setCategory(categoriesData.categories.find(element => element.slug === slug))
  }, [slug]);

  return (
    <section className="section">
      <div className="container d-flex f-direction-column g-md">
        <h1 className="section__title">{category.title}</h1>
        <div className="g-layout md:g-layout--1fr-2fr j-items-center">
          <img
            src={category.image}
            alt={category.title}
            width={256}
            height={256}
            className="img img--cover"
          />
          <ul className="list d-flex f-direction-column g-2xs">
            {category.questions?.map(element => {
              return (
                <Accordion
                  key={element.id}
                  accordionId={accordionId}
                  handleAccordionClick={handleAccordionClick}
                  data={element}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;