import React, {useState} from 'react';

const PropertySlider = ({propertyPictures}) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
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
            setCurrentSlide(0);
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

            <span className='arrow left' onClick={previousSlide}>&#10094;</span>

            <span className='arrow right'onClick={nextSlide} >&#10095;</span>

        </div> );
}
 
export default PropertySlider;