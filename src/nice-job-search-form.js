import React from 'react';
import './nice-job-search-form.css';
import StepList from './component/step-list';
import FormSlider from './component/form-slider';

const NiceJobSearchForm = () => {
  return (
    <div className="nice-job-search-form">
      <div className="step-list-wrapper">
        <StepList/>
        <FormSlider sliderWidth="600px"/>
      </div>
    </div>
  );
}

export default NiceJobSearchForm;
