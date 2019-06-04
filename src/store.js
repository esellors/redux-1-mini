import {createStore} from 'redux';

const initialState = {
   currentValue: 0
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

function counter(state = initialState, action) {
   console.log(state)
   switch(action.type) {
      case INCREMENT:
         return {
            ...state,
            currentValue: state.currentValue += action.payload
         }
      case DECREMENT:
         return {
            ...state,
            currentValue: state.currentValue -= action.payload
         }
      default:
         return state;
   }
}

export default createStore(counter);