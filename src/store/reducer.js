import { combineReducers } from 'redux-immutable'
import {reducer as cookbook} from '@/Home/cookbook'

const reducer = combineReducers({
    cookbook
})


export default  reducer 