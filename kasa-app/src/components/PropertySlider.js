import {useState} from 'react';

const PropertySlider = ({propertyPictures}) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    
    const pictureNumbers = propertyPictures.length;


    function previousSlide() {
        const container = document.querySelector('.container');

        if (currentSlide === 0) {
            container.style.transform = `translate(${(pictureNumbers-1)*-93}vw)`
            setCurrentSlide(pictureNumbers- 1 );  
        }
        
        else if(currentSlide > 0) {
            setCurrentSlide(currentSlide- 1);
            container.style.transform = `translate(${currentSlide*-93}vw)`;
            
        } else {
            setCurrentSlide(pictureNumbers- 1);
            container.style.transform = `translate(${currentSlide*93}vw)`
        }

    }

    function nextSlide() {
        const container = document.querySelector('.container');

        if(currentSlide < pictureNumbers-1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(1);
            container.style.transform = `translate(0vw)`
            return
        }

        container.style.transform = `translate(${currentSlide*-93}vw)`;
    }

    return ( 
        <div className="property-slider">
            
            <div className='container'>
                {propertyPictures.map((slideImage, index) => (
                    
                    <div className='slides' key={index}>
                        
                        <div className='pictures' style={{backgroundImage: `url(${slideImage})`}}>
                    
                        </div>
                        
                    </div>

                ))}
            </div>

            {() => { 
                if (pictureNumbers > 1) {
                    return ( 
                        <span className='arrow left' onClick={previousSlide}>
                            <svg width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_299517_96)">
                            <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_299517_96">
                            <rect width="96" height="119.64" fill="white" transform="translate(0 0.303223)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </span>
                    )
                }
            }}
            
            {() => { 
                if (pictureNumbers > 1) {
                    return (
                        <span className='arrow right'onClick={nextSlide} >
                            <svg width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_299517_100)">
                            <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_299517_100">
                            <rect width="96" height="119.64" fill="white" transform="translate(0 0.825928)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </span>
                    )
                }
            }}

        </div> );
}
 
export default PropertySlider;