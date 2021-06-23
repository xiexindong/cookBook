import React from "react"
import CookBookUi from '../ui/CookBookUi';
import useGetState from './useGetState'
import useGotoDetail from './useGotoDetail';


const CookBook = (props)=>{
    const { state } = useGetState()
    const { handleGotoDetail }   =  useGotoDetail()
    return<CookBookUi
        list = { state.get('list') }
        useGotoDetail = { handleGotoDetail }
    >

    </CookBookUi>

  
}

export default CookBook