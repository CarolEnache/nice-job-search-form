import React, { Component } from 'react';
import './nice-job-search-form.css';
import Step from './component/step';

class NiceJobSearchForm extends Component {
  render() {
    return (
      <div className="nice-job-search-form">
        <div>
          <Step step={2}/>
        </div>
      </div>
    );
  }
}

export default NiceJobSearchForm;
