import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetSummary from './components/BudgetSummary';
import BudgetExpenseForm from './components/BudgetExpenseForm';

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
                    <>
                      <h2 className="budget__title">💰 Presupuesto 💰</h2>
                      <BudgetForm
                        setBudget={setBudget}
                        setRemaining={setRemaining}
                        setBudgetForm={setBudgetForm}
                      />
                    </>
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
                      <section className='budget-expenses'>
                        <h2 className="budget-expense__title">Listado</h2>
                        <div>
                          <h4 className="budget__title">{expense.concept}</h4>
                          <h4 className="budget__title">{expense.value}</h4>
                        </div>
                      </section>
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
