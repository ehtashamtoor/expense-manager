import React from 'react'
import { useState } from 'react';
// import { useContext } from 'react';
// import { GlobalContext } from '../Context/GlobalState';
import { useDispatch } from 'react-redux/es/exports';
import { DelTrans } from '../actions/allActions';
import { EditTrans } from '../actions/allActions';

export const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();
    const [editOn, seteditOn] = useState(false);
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');

    function EditTransaction() {

        let trans = {
            id: transaction.id,
            desc: desc,
            amount: +amount,
        }

        seteditOn(false);
        dispatch(EditTrans(transaction, trans))

    }

    const RemoveTrans = (id) => {
        dispatch(DelTrans(id));
    }
    return (

        editOn ?
            <div className="wrapperPopUp">
                <div className='editPopBox'>
                    <form>
                        <div>
                            <label htmlFor="desc">Enter new Description</label><br />
                            <input type="text" placeholder='New Description' required value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                        </div>
                        <div>
                            <label htmlFor="amount">Enter New Amount</label>
                            <br />
                            <input type="number" placeholder='Amount' required value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                        </div>
                        <button type='submit' className='addBtn' onClick={EditTransaction}>EDIT</button>
                    </form>
                </div>
            </div>

            :
            <li className={`transaction ${transaction.amount < 0 ? 'red' : 'green'}`}>
                <button className='EditBtn btn' onClick={()=>{ seteditOn(true) }}><i className="material-icons">edit</i></button>
                <span>{transaction.desc}</span>
                <span>${transaction.amount}</span>
                <button className='DelBtn btn' onClick={() => { RemoveTrans(transaction.id) }}><i class="material-icons">delete</i></button>
            </li>

    )
}
