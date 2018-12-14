import { createContext, useContext } from 'react';

export const initialState = {
  currentStep: 1,
  somethingElse: [1, 2],
  name: 'Bob'
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_SLIDER_STEP':
      return {...state, currentStep: action.payload};
    case 'SET_NAME':
      return {...state, name: action.payload};
    default:
      return state;
  }
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();
export const getState = property => {
  const reduxState = useContext(StateContext);
  return reduxState[property];
}
