import { combineReducers } from "redux";
import transactionsReducer from './reducers'


const allReducer = combineReducers({
    Alltransactions: transactionsReducer
})

export default allReducer;