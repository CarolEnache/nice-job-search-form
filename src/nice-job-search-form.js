import React from 'react';
import './nice-job-search-form.css';
import StepList from './component/step-list';

const NiceJobSearchForm = () => {
  return (
    <div className="nice-job-search-form">
      <div className="step-list-wrapper">
        <StepList/>
      </div>
    </div>
  );
}

export default NiceJobSearchForm;
