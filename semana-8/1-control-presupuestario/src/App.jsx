import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import BudgetForm from './components/BudgetForm';

function App() {
  const company = {
    name: '💸Control Presupuestario💸',
    slogan: 'Tu dinero es nuestra preocupacion'
  };

  const currentDateYear = new Date().getFullYear();
  const author = 'ELGS';

  const [budget, setBudget] = useState(0);
  const [budgetForm, setBudgetForm] = useState(true);

  return (
    <>
      <Header
        company={company}
      />
      <main className="main">
        <section className="budget">
          <div className="budget__container">
            <h2>Presupuesto</h2>
            {
              budgetForm ?
                (
                  <BudgetForm
                    setBudget={setBudget}
                    setBudgetForm={setBudgetForm}
                  />
                )
                :
                (
                  <h2>{budget}</h2>
                )
            }
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
