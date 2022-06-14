import { useState } from "react";

const BudgetForm = ({ setBudget, setRemaining, setBudgetForm }) => {

  const [budgetInput, setbudgetInput] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (+budgetInput > 0) {
      setBudget(budgetInput);
      setRemaining(budgetInput);
      setBudgetForm(false);
    } else {
      alert('El presupuesto debe ser mayor a cero');
    }
  };

  return (
    <form
      className="budget__form"
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        placeholder="Presupuesto"
        className="budget__form-input"
        onChange={(e) => setbudgetInput(e.target.value)}
        required
      />
      <button className="budget__form-button">Registrar</button>
    </form>
  );
}

export default BudgetForm;