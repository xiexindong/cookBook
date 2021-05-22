import { fromJS } from 'immutable'
const defaultState = fromJS({
    routeInfo: {
      selectedTab: 'cookbook',
      cateType: 'category',
      cateAside: ''
    }
  })

  const reducer = (state = defaultState,action)=>{
      switch(action.type){
           default:
               return state   
      }
  }

  export default reducer