import { takeEvery, put, call } from 'redux-saga/effects'

import actionCreator from './actionCreator'

function* loadDataAsync(){
    let res = yield call(get, {url: '../../../mock/cookbook-list.json'})
    yield put(actionCreator.loadDataSync(res.data.data))
}

function* loadData(){
    yield takeEvery('loadDataSaga',loadDataAsync)
}


export default loadData