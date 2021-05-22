import { createStore, applyMiddleware,compose }  from "redux"
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'

import  reducer  from './reducer'
import sagas from './sagas'


const sagaMiddleware = createSagaMiddleware()

const initialState = Immutable.Map()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [sagaMiddleware]

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
    )
   
)

sagas.forEach(saga =>  sagaMiddleware.run(saga))


export default store