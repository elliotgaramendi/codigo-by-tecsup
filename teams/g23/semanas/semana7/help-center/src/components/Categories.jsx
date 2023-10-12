import { categoriesData } from "../utils/dataUtil";
import Card from "./Card";

const Categories = () => {
  const { title, categories } = categoriesData;
  return (
    <section className="section">
      <div className="container d-flex f-direction-column g-md">
        <h2 className="section__title">{title}</h2>
        <div className="g-layout g-layout--auto-fit-columns g-md">
          {categories.map(element => <Card key={element.id} data={element} />)}
        </div>
      </div>
    </section>
  );
};

export default Categories;