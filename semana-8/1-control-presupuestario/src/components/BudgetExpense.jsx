const BudgetExpense = ({ expense }) => {
  return (
    <li
      className="expenses__expense-item"
    >
      <h4 className="expenses__expense-concept">{expense.concept}</h4>
      <h4 className="expenses__expense-value">{expense.value}</h4>
    </li>
  );
}

export default BudgetExpense;