import React, { useContext } from 'react';
import './step.scss';
import { DispatchContext } from '../../redux'

const Step = ({label = 'Step 1', hexColor, id}) => {
  const dispatch = useContext(DispatchContext);

  const setStep = n => {
    dispatch({
      type: 'SET_SLIDER_STEP',
      payload: n
    })
  }
  return (
    <div 
      className="step" 
      onClick={() => setStep(id)}
      style={{backgroundColor: hexColor, borderColor: hexColor}}>{label}</div>
  )
}

export default Step;