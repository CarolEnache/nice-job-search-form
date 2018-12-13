import React from 'react';
import Step from '../step/step.component';

const StepList = ({}) => {
  const stepValueList = ['Step 1', 'Step 2']
  return (
    <div className="step-list">
      {stepValueList.map((stepValue, key) => (
        <Step key={key} step={stepValue}/>
      ))}
    </div>
  )
}

export default StepList;