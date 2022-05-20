const BudgetExpenses = ({ expenses }) => {
  return (
    <section className="expenses">
      <h2 className="expenses__title">{expenses.length ? 'Listado' : ''}</h2>
      <ul className="expenses__expense-list">
        {
          expenses.map((element, index) => {
            return (
              <li
                key={index}
                className="expenses__expense-item"
              >
                <h4 className="expenses__expense-concept">{element.concept}</h4>
                <h4 className="expenses__expense-value">{element.value}</h4>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default BudgetExpenses;