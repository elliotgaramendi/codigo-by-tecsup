import { useState } from "react";

const BudgetForm = ({ setBudget, setBudgetForm }) => {

  const [budgetInput, setbudgetInput] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (+budgetInput > 0) {
      setBudget(budgetInput);
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
        onChange={(e) => setbudgetInput(e.target.value)}
        required
      />
      <button>Registrar</button>
    </form>
  );
}

export default BudgetForm;