import {createStore} from 'redux';

const initialState = {
   currentValue: 0,
   futureValues: [],
   previousValues: []
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UNDO = 'UNDO';
export const REDO = 'REDO';

function counter(state = initialState, action) {
   console.log(action)
   switch(action.type) {
      case INCREMENT:
         return {
            ...state,
            currentValue: state.currentValue + action.payload,
            futureValues: [],
            previousValues: [state.currentValue, ...state.previousValues]
         }
      case DECREMENT:
         return {
            ...state,
            currentValue: state.currentValue - action.payload,
            futureValues: [],
            previousValues: [state.currentValue, ...state.previousValues]
         }
      case UNDO:
         return {
            currentValue: state.previousValues[0],
            futureValues: [state.currentValue, ...state.futureValues],
            previousValues: state.previousValues.slice(1)
         }
      case REDO:
         return {
            ...state,
            currentValue: state.futureValues[0],
            futureValues: state.futureValues.slice(1),
            previousValues: [state.currentValue, ...state.previousValues]
         }
      default:
         return state;
   }
}

export default createStore(counter);