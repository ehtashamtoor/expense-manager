import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransHistory } from './components/TransHistory';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className='App'>

      <Header />
      <Balance />

      <IncomeExpense />
      <TransHistory />
      <AddTransaction />

    </div>
  );
}

export default App;
