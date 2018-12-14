import React, { useReducer } from 'react';
import './nice-job-search-form.css';
import StepList from './component/step-list';
import FormSlider from './component/form-slider';
import { initialState, reducer, DispatchContext, StateContext } from './redux';

const NiceJobSearchForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="nice-job-search-form">
          <div className="step-list-wrapper">
            <StepList/>
            <FormSlider sliderWidth="600px"/>
          </div>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default NiceJobSearchForm;
