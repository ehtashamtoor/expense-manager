import constants from '../actions/allActions'

const initial_State = {
    transactions: []
}

// { id: 1, desc: "Salary", amount: 500 },
// { id: 2, desc: "Car", amount: -200 },
// { id: 3, desc: "Fuel", amount: -100 },

function transactionsReducer (state = initial_State, action)  {
    switch (action.type) {
        case constants.ADD_TRANS:
            state = {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
            break;
        
        case constants.DEL_TRANS:
            state = {
                ...state,
                transactions: [...state.transactions.filter(transaction => transaction.id !== action.payload)]
            }
            break;

        case constants.EDIT_TRANS:
            state = {
                ...state,
                transactions: [...state.transactions.map(transaction => transaction.id === action.payload.oldTransaction.id ? action.payload.newTransaction : transaction)]
            }
            break;
    }

    return state;
}

export default transactionsReducer;
