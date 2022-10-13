import React  from 'react'
// import { useContext } from 'react';
import { useSelector } from 'react-redux';
// import { GlobalContext } from '../Context/GlobalState';

export const IncomeExpense = () => {

  const { Alltransactions } = useSelector(state => state);
 
  const amounts = Alltransactions.transactions.map(transaction => transaction.amount);

  const income = amounts.filter(amount => amount > 0).reduce((total, item)=>(total += item), 0);
  const expense = amounts.filter(amount => amount < 0).reduce((total, item)=>(total += item), 0);
 
 
  return (
    <div className='IncomeExpense-box'>
        <div className="income">
            <h5>Income</h5>
            <h3>${income}</h3>
        </div>
        <span className='vertical-line'></span>
        <div className="expense">
            <h5>Expense</h5>
            <h3>${expense}</h3>
        </div>
    </div>
  )
}
