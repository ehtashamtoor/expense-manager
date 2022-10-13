import React from 'react'

import { useSelector } from 'react-redux';

import { Transaction } from './Transaction';

export const TransHistory = () => {

  

  const { Alltransactions } = useSelector(state => state);

  
  return (
    <div className='transHistory-box'>
        <h4>Your Transactions:</h4>
        <ul className='transactions'>
          {
            Alltransactions.transactions.map((transaction)=>{
              return <Transaction transaction={transaction} key={transaction.id}/>
            })
          }
        </ul>
        <hr />
    </div>
  )
}
