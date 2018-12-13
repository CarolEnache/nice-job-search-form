import React from 'react';
import ReactDOM from 'react-dom';
import NiceJobSearchForm from './nice-job-search-form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NiceJobSearchForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
