import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesData } from "../utils/dataUtil";

const Category = () => {
  const { slug } = useParams();

  const [category, setCategory] = useState({});

  useEffect(() => {
    setCategory(categoriesData.categories.find(element => element.slug === slug))
  }, [slug]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">{category.title}</h1>
        <ul>
          {category.questions?.map(element => {
            const { id, question, answer } = element;
            return (
              <li key={id}>
                <h2>{question}</h2>
                <h2>{answer}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Category;