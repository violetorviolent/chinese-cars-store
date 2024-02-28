import { useState } from 'react';
import "./ButtonType3.css";

const ButtonType3 = (props) => {
    const [fillColor, setFillColor] = useState('none');
  const [strokeColor, setStrokeColor] = useState('var(--color-h)');
  const colorChange = () => {
    if (fillColor === 'none') {
      setFillColor('var(--color-accent)');
      setStrokeColor('var(--color-accent)')
    }
    else {
      setFillColor('none');
      setStrokeColor('var(--color-h)');
    }
  };

function click(){
    colorChange();
    props.click();
}
    return (
        <button className="btn-type3" onClick={click}>
          <svg width="25" height="22" viewBox="0 0 25 22" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1754 2.76392C21.5989 2.20482 20.9139 1.7612 20.1596 1.45851C19.4054 1.15581 18.5968 1 17.7801 1C16.9634 1 16.1548 1.15581 15.4005 1.45851C14.6463 1.7612 13.9613 2.20482 13.3848 2.76392L12.5 3.63019L11.6152 2.76392C11.0387 2.20482 10.3537 1.7612 9.59948 1.45851C8.84524 1.15581 8.0366 1 7.21992 1C6.40324 1 5.5946 1.15581 4.84036 1.45851C4.08612 1.7612 3.40112 2.20482 2.82464 2.76392C0.388567 5.1184 0.239185 9.09435 3.30726 12.1152L12.5 21L21.6927 12.1152C24.7608 9.09435 24.6114 5.1184 22.1754 2.76392Z" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </button>
        
    )
}

export default ButtonType3