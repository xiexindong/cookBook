import { combineReducers } from 'redux-immutable'

import {
    reducer as cookbook
} from '@/Home/cookbook'


import {
    reducer as category
} from '../Home/category'
  

const reducer = combineReducers({
    cookbook,
    category
  })


export default  reducer 