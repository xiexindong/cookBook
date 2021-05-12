import { LOADDATA } from './actionTypes'

const loadDataSync = list =>{
    return {
        type:LOADDATA,
        list
    }
}


const loadDataSyncSaga = () =>{
    return {
        type: 'loadDataSaga'
    }
}

export default {
    loadDataSync,
    loadDataSyncSaga
}