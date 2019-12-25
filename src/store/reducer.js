import { combineReducers } from "redux"
import { reducer as navLeftReducer } from "../components/NavLeft/store/"

const reducer = combineReducers({
    home: navLeftReducer
})

export default reducer

