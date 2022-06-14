import { useState } from "react";

const BudgetExpenseForm = ({ setExpense }) => {

  const [formExpense, setFormExpense] = useState({
    concept: '',
    value: ''
  });
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
      setFormExpense({
        concept: '',
        value: ''
      });
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  return (
    <section className="expense-form">
      <h2 className="expense-form__title">💸 Gasto 💸</h2>
      <form
        className="expense-form__form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Concepto"
          className="expense-form__form-input"
          name="concept"
          value={concept}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          className="expense-form__form-input"
          name="value"
          value={value}
          onChange={handleChange}
          required
        />
        <button className="expense-form__form-button">Registrar</button>
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