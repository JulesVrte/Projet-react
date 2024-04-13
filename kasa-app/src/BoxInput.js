import { useState } from 'react';
import arrowSvg from './img/arrow.svg';

const BoxInput = ({title, value}) => {

    const [isOpen, setIsOpen] = useState(false);

    
    function openCloseDropDown(){
        const value = document.querySelector('.' + title);
        
        const arrow = document.querySelector(`.${title}-arrow-drop-down`);
        
        value.style.display = isOpen ? "block" : "none";
        arrow.style.transition = 'transform 0.5s';
        arrow.style.transform = isOpen ? 'rotate(-180deg)' : 'rotate(0deg)';
    }
        
    const toggleDropDown = () => {
        setIsOpen(!isOpen);
        openCloseDropDown();
    }

    return (
        <div className='box-input-container'>

            <div className='box-input' onClick={toggleDropDown}>

                <h2 className='title'>{title}</h2>

                <img className={`${title}-arrow-drop-down`} src={arrowSvg} alt="arrow-drop-down" />

            </div>

            <div className={`text ${title}`}>{value}</div>

        </div>
    );
}

export default BoxInput;