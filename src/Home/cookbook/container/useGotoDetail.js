import { useHistory } from 'react-router-dom';


const useGotoDetail = () =>{
  const history = useHistory()

  const handleGotoDetail = (item) =>{
    history.push("/detail",{ item, from: '/home'})
  }

  return {
    handleGotoDetail
  }
}


export default useGotoDetail