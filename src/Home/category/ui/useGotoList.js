import React,{ useCallback }  from 'react';
import { useHistory } from 'react-router-dom';


const useGotoList = () =>{
  const history = useHistory()

  const handleGoToList = useCallback((title)=>{
    return ()=> history.push('/list',{ title })
  },[history])


  return {
    handleGoToList
  }


}

export default useGotoList