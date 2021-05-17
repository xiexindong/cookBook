import { takeEvery, put, call } from 'redux-saga/effects'
import { get } from '@u/http.js'

import actionCreator from './actionCreator'

function* loadDataAsync(){
  console.log('loadDataAsync')
    let res= yield call(get, {url: '../../../mock/cookbook-list.json'})
    yield put(actionCreator.loadDataSync(res.data.data))
}



function* loadData() {
    console.log('loadDataSaga')
    yield takeEvery('loadDataSaga', loadDataAsync)
  }

export default loadData