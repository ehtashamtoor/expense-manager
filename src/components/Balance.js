import React from 'react'
import { useSelector } from 'react-redux';

export const Balance = () => {

    const { Alltransactions } = useSelector(state => state);

    const amounts = Alltransactions.transactions.map(transaction => transaction.amount);
    
    let balance = 0;
    for(let i = 0; i < amounts.length; i++) {
        balance += amounts[i];
    }

    return (

        <div className='balance-box text-center'>
            <h6>Your Balance:</h6>
            <h2>${ balance }</h2>
            <hr />
        </div>

    )
}
