import React from "react"
import CookBookUi from '../ui/CookBookUi';
import useGetState from './useGetState'


const CookBook = (props)=>{
    const { state } = useGetState()
    return<CookBookUi
        list = {state.get('list')}
    >

    </CookBookUi>

  
}

export default CookBook