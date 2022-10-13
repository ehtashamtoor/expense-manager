
const constants = {
    ADD_TRANS: "ADD_TRANS",
    DEL_TRANS: "DEL_TRANS",
    EDIT_TRANS: "EDIT_TRANS",
}

export const AddTrans = (transaction) => {
    return (dispatch) =>{
        dispatch({
            type: constants.ADD_TRANS,
            payload: transaction,
        })
    }
}

export const DelTrans = (id) => {
    return (dispatch) => {
        dispatch({
            type: constants.DEL_TRANS,
            payload: id,
        })
    }
}

export const EditTrans = (oldTransaction, newTransaction) => {
    return (dispatch) => {
        dispatch({
            type: constants.EDIT_TRANS,
            payload: { oldTransaction, newTransaction }
        })
    }
}



export default constants;