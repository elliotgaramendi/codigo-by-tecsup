import BudgetExpense from "./BudgetExpense";

const BudgetExpenses = ({ expenses }) => {
  return (
    <section className="expenses">
      <h2 className="expenses__title">{expenses.length ? 'Listado' : ''}</h2>
      <ul className="expenses__expense-list">
        {
          expenses.map((expense, index) => {
            return (
              <BudgetExpense
                key={index}
                expense={expense}
              />
            );
          })
        }
      </ul>
    </section>
  );
}

export default BudgetExpenses;