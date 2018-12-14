import React from 'react';
import Step from '../step/step.component';
import { stepValueList } from './step-data-list'
import './step-list.scss';

const StepList = () => {
  return (
    <div className="step-list">
      {stepValueList.map((stepValue, key) => (
        <Step key={key} {...stepValue} id={key + 1}/>
      ))}
    </div>
  )
}

export default StepList;