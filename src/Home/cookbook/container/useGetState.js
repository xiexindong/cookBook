import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import actionCreator from '../actionCreator'



const useGetState = ()=> {
        const state = useSelector(state => state.getIn(['cookbook']))
        const dispatch =useDispatch()

        useEffect(()=>{
            dispatch(actionCreator.loadDataSyncSaga())
        },[dispatch])

        return {
            state
        }

}

export default useGetState