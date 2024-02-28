import { useState } from 'react';
import './DropdownType1.css';


const DropdownType1 = (props) => {
    const [toggleOptions, setToggleOptions] = useState(false);
    const [rotateChevron, setRotateChevron] = useState(false);
    const handleRotate = () => setRotateChevron(!rotateChevron);
    const colorArrow = props.dropdownType === 'DropdownType1_1' ? 'white': 'var(--color-text-light)';
    
  return (
    <div className={'DropdownType1 '+props.dropdownType} onClick={() => { setToggleOptions(!toggleOptions); handleRotate() }}>
          <div className={'DropdownType1-dropdown '+props.dropdownType+'-dropdown'}>
            <p>{props.title}</p>
            <svg className={` ${rotateChevron ? "rotate" :'rotateBack'}`} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z" fill={colorArrow} />
            </svg>
          </div>
          {toggleOptions &&
          <div className={'DropdownType1-Options slide-down '+props.dropdownType+'-Options'}>
              {props.list.map((card) => {
                return (
                  <div onClick={() => { props.setTitle(card.title); props.setCarCount?.(23);  }} key={card.title} ><p>{card.title}</p></div>
                )
              })}
            </div>
          }
        </div>
  )
}

export default DropdownType1