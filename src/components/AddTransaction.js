import React, { useState } from 'react'

import { useDispatch } from 'react-redux';

import { AddTrans } from '../actions/allActions';

export const AddTransaction = () => {
    const dispatch = useDispatch();

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    const addTrans = (e) =>{
        e.preventDefault();

        let newtrans = {
            id: Math.floor(Math.random() * 1000000),
            desc:desc,
            amount: +amount
        }

        dispatch(AddTrans(newtrans));

        setDesc("");
        setAmount('');
    }
    return (
        <div className='AddTransaction-box'>
            <h5 className='text-center'>Add new transactions</h5>

            <form onSubmit={addTrans}>
                <div>
                    <label htmlFor="desc">Enter Description</label><br />
                    <input type="text" placeholder='Description' id='desc' required value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="amount">Enter Amount</label>
                    <br />
                    <input type="number" placeholder='Amount' id='amount' required value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                </div>
                <button type='submit' className='addBtn'>Add Transaction</button>
            </form>
        </div>
    )
}
