import React from 'react';
import Step from '../step/step.component';
import { stepValueList } from './step-data-list'
import './step-list.css'

const StepList = () => {
  return (
    <div className="step-list">
      {stepValueList.map((stepValue, key) => (
        <Step key={key} {...stepValue}/>
      ))}
    </div>
  )
}

export default StepList;