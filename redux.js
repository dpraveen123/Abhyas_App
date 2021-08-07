import { createStore } from 'redux'
const INITIAL_STATE = {
   a:0,
   b:0,
   authdetails:'',
   changecontentvisbile:false,
  };
  function counterReducer(state =INITIAL_STATE , action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      case 'authdetails':
          return{authdetails:action.payload} 
      case 'changevisible':
          return{changecontentvisbile:!state.changeconentvisbile}     
      default:
        return state
    }
  }
  var store = createStore(counterReducer);

  // store.subscribe(() => console.log(store.getState().changecontentvisbile," i am from redux"))


  export default store;