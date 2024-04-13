import { useParams} from 'react-router-dom';
import logements from './logement';


const Property = () => {
    const { id } = useParams();

    const property = logements.filter((element) => element.id === id);

    const pictureNumbers = property[0].pictures.length;

    let currentSlide = 0;

    function previousSlide() {
        const container = document.querySelector('.container');

        if (currentSlide === 0) {
            container.style.transform = `translate(${(pictureNumbers-1)*-93}vw)`
            currentSlide = pictureNumbers - 1;
        }
        
        else if(currentSlide > 0) {
            currentSlide--;
            container.style.transform = `translate(${currentSlide*-93}vw)`;
            
        } else {
            currentSlide = pictureNumbers - 1;
            container.style.transform = `translate(${currentSlide*93}vw)`
        }

    }

    function nextSlide() {
        const container = document.querySelector('.container');

        if(currentSlide < pictureNumbers-1) {
            currentSlide++;
        } else {
            currentSlide = 0;
            container.style.transform = `translate(0vw)`
            return
        }

        container.style.transform = `translate(${currentSlide*-93}vw)`;
    }

    return ( 
        <div className="property">
            <div className="property-slider">
                <div className='container'>
                    {property[0].pictures.map((slideImage, index) => (
                        
                        <div className='slides' key={index}>
                            
                            <div className='pictures' style={{backgroundImage: `url(${slideImage})`}}>
                        
                            </div>
                            
                        </div>

                    ))}
                </div>

                <span className='arrow left' onClick={previousSlide}>&#10094;</span>

                <span className='arrow right'onClick={nextSlide} >&#10095;</span>
            </div>
        </div>
    );
}
 
export default Property;