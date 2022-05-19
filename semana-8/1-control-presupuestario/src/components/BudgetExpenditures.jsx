import { useState } from "react";

const BudgetExpenditures = () => {

  const [expense, setExpense] = useState({});
  const [expendituresForm, setExpendituresForm] = useState({});
  const [alert, setAlert] = useState(false);
  const { concept, value } = expendituresForm;

  const handleChange = (e) => {
    setExpendituresForm({
      ...expendituresForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (concept.trim() !== '' && value > 0) {
      setExpense(expendituresForm);
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <section className="budget-summary">
      <h2 className="budget-summary__title">💸 Gastos 💸</h2>
      <form
        className="budget-summary__form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Concepto"
          className="budget-summary__form-input"
          name="concept"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          className="budget-summary__form-input"
          name="value"
          onChange={handleChange}
          required
        />
        <button className="budget-summary__form-button">Registrar</button>
      </form>
      <div>
        <h4 className="budget__title">{expense.concept}</h4>
        <h4 className="budget__title">{expense.value}</h4>
      </div>
      {
        alert
        &&
        <div className="alert">
          Todos los campos son obligatorios
        </div>
      }
    </section>
  );
}

export default BudgetExpenditures;