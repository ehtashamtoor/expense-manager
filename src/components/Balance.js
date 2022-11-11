import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Balance = () => {

    const { Alltransactions } = useSelector(state => state);

    const amounts = Alltransactions.transactions.map(transaction => transaction.amount);

    let balance = 0;
    for (let i = 0; i < amounts.length; i++) {
        balance += amounts[i];
    }

    useEffect(() => {

        if(balance < 0){

            const notify = () => toast("Expense Exceeded", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000
            });
        
            notify();
        }
      }, [balance])

    return (

        <div className='balance-box text-center'>
            <ToastContainer />
            <h6>Your Balance:</h6>
            <h2>${balance > 0 ? balance : 0}</h2>
            <hr />
        </div>

    )
}
