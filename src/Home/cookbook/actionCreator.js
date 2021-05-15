import { LOADDATA } from './actionTypes'
console.log('LOADDATA',LOADDATA)

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