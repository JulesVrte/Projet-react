import { useState, useEffect } from 'react';

const BoxInput = ({title, value}) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
            
        const text = document.querySelector('.' + title);
            
        const arrow = document.querySelector(`.${title}-arrow-drop-down`);

        isOpen ? text.classList.remove('text-transition-off') : text.classList.add('text-transition-off')

        arrow.style.transition = 'transform 0.5s';

        arrow.style.transform = isOpen ? 'rotate(-180deg)' : 'rotate(0deg)';
    
    }, [isOpen, title]);

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='box-input-container'>

            <div className='box-input' onClick={toggleDropDown}>

                <h2 className='title'>{title}</h2>

                <svg className={`${title}-arrow-drop-down arrow-drop-down`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white"/>
                </svg>

            </div>

            <div className={`text ${title}`}>{value}</div>

        </div>
    );
}

export default BoxInput;