import { categoriesData } from "../utils/dataUtil";

const Categories = () => {
  const { title, categories } = categoriesData;
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <ul>
          {categories.map(element => {
            const { id, title } = element;
            return (
              <li key={id}>{title}</li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Categories;