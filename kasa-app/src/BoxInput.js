import { useState, useEffect } from 'react';
import arrowSvg from './img/arrow.svg';

const BoxInput = ({title, value}) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
            
        const text = document.querySelector('.' + title);
            
        const arrow = document.querySelector(`.${title}-arrow-drop-down`);

        isOpen ? text.classList.remove('text-transition-off') : text.classList.add('text-transition-off')

        arrow.style.transition = 'transform 0.5s';

        arrow.style.transform = isOpen ? 'rotate(-180deg)' : 'rotate(0deg)';
    
    }, [isOpen]);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
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