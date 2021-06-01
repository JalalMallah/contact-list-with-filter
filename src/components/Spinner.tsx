import React from 'react';

import 'styles/Spinner.scss';

const Spinner: React.FC = () => (
  <div className='sk-chase'>
    <div className='sk-chase-dot'></div>
    <div className='sk-chase-dot'></div>
    <div className='sk-chase-dot'></div>
    <div className='sk-chase-dot'></div>
    <div className='sk-chase-dot'></div>
    <div className='sk-chase-dot'></div>
  </div>
);

export default Spinner;
