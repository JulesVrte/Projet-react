import { useState } from 'react';
import arrowSvg from './img/arrow.svg';

const BoxInput = ({title, value}) => {

    const [isOpen, setIsOpen] = useState(false);

    
    function openCloseDropDown(){
        const value = document.querySelector('.' + title);
        
        const arrow = document.querySelector(`.${title}-arrow-drop-down`);
        
        value.style.opacity = isOpen ? 1 : 0;
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    }
        
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
        openCloseDropDown();
    }

    return (

        <div className='box-input' onClick={toggleDropDown}>

            <h2 className='title'>{title}</h2>

            <img className={`${title}-arrow-drop-down`} src={arrowSvg} alt="arrow-drop-down" />

            <div className={`text ${title}`}>{value}</div>

        </div>
    );
}

export default BoxInput;