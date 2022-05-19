const BudgetSummary = ({ budget, remaining }) => {
  return (
    <section className="budget-summary">
      <h2 className="budget-summary__title">💰 Resumen 💰</h2>
      <h3 className="budget-summary__budget">Presupuesto: {budget}</h3>
      <h3 className="budget-summary__remaining">Restante: {remaining}</h3>
    </section>
  );
};

export default BudgetSummary;