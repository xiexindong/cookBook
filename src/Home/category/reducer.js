import { fromJS } from 'immutable'
const defaultState = fromJS({
    routeInfo: {
      selectedTab: 'cookbook',
      cateType: 'category',
      cateAside: ''
    }
  })

  const reducer = (state = defaultState,action)=>{
      console.log('action',action)
      switch(action.type){
           case 'changeSelectedTab':
              return state.setIn(['routeInfo','selectedTab'],action.selectedTab)
           default:
               return state   
      }
  }

  export default reducer