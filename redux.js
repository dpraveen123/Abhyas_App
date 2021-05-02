import { createStore } from 'redux'
const INITIAL_STATE = {
   a:0,
   b:0,
   authdetails:''
  };
  function counterReducer(state =INITIAL_STATE , action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      case 'authdetails':
          return{authdetails:action.payload}  
      default:
        return state
    }
  }
  var store = createStore(counterReducer);

  store.subscribe(() => console.log(store.getState().authdetails,store.getState().authdetails.uuid," i am from redux"))


  export default store;