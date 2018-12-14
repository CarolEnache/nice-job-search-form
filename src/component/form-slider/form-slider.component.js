import React from 'react';
import './form-slider.scss'
import { getState } from '../../redux'

const FormSlider = ({sliderWidth}) => {
  const currentStep = getState('currentStep')
  return (
    <div className="form-slider__wrapper">
      {[1,2,3,4].map(x => (
        <input
          key={x}
          className="form-slider__radio" 
          checked={x === currentStep}
          type="radio" 
          onChange={() => {}}
          name="slider" />
      ))}
      <div className="form-slider">
        <div className="form-slider__slide" style={{width: sliderWidth, backgroundColor: '#c00'}}>1</div>
        <div className="form-slider__slide" style={{width: sliderWidth, backgroundColor: '#f00'}}>2</div>
        <div className="form-slider__slide" style={{width: sliderWidth, backgroundColor: '#ce0'}}>3</div>
        <div className="form-slider__slide" style={{width: sliderWidth, backgroundColor: '#ee0'}}>4</div>
      </div>
    </div>
  )
}

export default FormSlider;