import { useState } from "react";

const BudgetExpenseForm = ({ setExpense }) => {

  const [formExpense, setFormExpense] = useState({});
  const [alert, setAlert] = useState(false);
  const { concept, value } = formExpense;

  const handleChange = (e) => {
    setFormExpense({
      ...formExpense,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (concept.trim() !== '' && value > 0) {
      setExpense(formExpense);
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <section className="budget-expense">
      <h2 className="budget-expense__title">💸 Gasto 💸</h2>
      <form
        className="budget-expense__form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Concepto"
          className="budget-expense__form-input"
          name="concept"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          className="budget-expense__form-input"
          name="value"
          onChange={handleChange}
          required
        />
        <button className="budget-expense__form-button">Registrar</button>
      </form>
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

export default BudgetExpenseForm;