/** @format */

import './App.css';
import Header from './componants/Header';
import Balance from './componants/Balance';
import TransactionsList from './componants/TransactionsList';
import IncomeExpense from './componants/IncomeExpense';
import Addtransaction from './componants/Addtransaction';
import { Addtransactioncontext } from './context/context';
import { useEffect, useState } from 'react';
function App() {
  const storedincome = JSON.parse(localStorage.getItem('income'));
  const storedexpense = JSON.parse(localStorage.getItem('expense'));
  const storedlist = JSON.parse(localStorage.getItem('list'));
  const [list, setlist] = useState(storedlist ? storedlist : []);
  const [income, Setincome] = useState(() => {
    return storedincome ? storedincome : 0;
  });
  const [expense, setexpense] = useState(() => {
    return storedexpense ? storedexpense : 0;
  });
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem('income', JSON.stringify(income));
    localStorage.setItem('expense', JSON.stringify(expense));
  }, [income, expense, list]);
  return (
    <Addtransactioncontext.Provider
      value={{ income, Setincome, expense, setexpense, list, setlist }}>
      <div className='App'>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpense />
          <TransactionsList />
          <Addtransaction />
        </div>
      </div>
    </Addtransactioncontext.Provider>
  );
}

export default App;
