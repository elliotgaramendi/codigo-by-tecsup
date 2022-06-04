import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetSummary from './components/BudgetSummary';
import BudgetExpenseForm from './components/BudgetExpenseForm';
import BudgetExpenses from './components/BudgetExpenses';

function App() {
  const company = {
    name: '💸Control Presupuestario💸',
    slogan: 'Tu dinero es nuestra preocupacion'
  };

  const currentDateYear = new Date().getFullYear();
  const author = 'ELGS';

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [budgetForm, setBudgetForm] = useState(true);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    if (expense.value) {
      console.log('expense.value');
      setExpenses([
        ...expenses,
        expense
      ]);
      setRemaining(remaining - expense.value);
      setExpense({});
    }
  }, [expense]);

  return (
    <>
      <Header
        company={company}
      />
      <main className="main">
        <section className="budget">
          <div className="budget__container">
            <div className="budget__budget">
              {
                budgetForm ?
                  (
                    <div className="budget__budget-card">
                      <h2 className="budget__title" data-testid="titulo">💰 Presupuesto 💰</h2>
                      <BudgetForm
                        setBudget={setBudget}
                        setRemaining={setRemaining}
                        setBudgetForm={setBudgetForm}
                      />
                    </div>
                  )
                  :
                  (
                    <>
                      <BudgetExpenseForm
                        setExpense={setExpense}
                      />
                      <BudgetSummary
                        budget={budget}
                        remaining={remaining}
                      />
                      <BudgetExpenses
                        expenses={expenses}
                      />
                    </>
                  )
              }
            </div>
          </div>
        </section>
      </main>
      <Footer
        currentDateYear={currentDateYear}
        author={author}
      />
    </>
  );
}

export default App;
