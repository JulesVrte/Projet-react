import { useParams} from 'react-router-dom';
import logements from './logement';
import starIcon from './img/star-icon.svg';
import greyStarIcon from './img/grey-star-icon.svg';
import arrow from './img/arrow.svg';


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

    function OpenDropDown () {
        const descriptionText = document.querySelector('.description-text');
        const arrow = document.querySelector('.arrow-drop-down');

        if(descriptionText.style.opacity === "0") {

            descriptionText.style.opacity = 1;
            arrow.style.transform = 'rotate(180deg)';
        } else {
            descriptionText.style.opacity = 0;
            arrow.style.transform = 'rotate(0deg)';
        }
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

            <div className="property-infos-container">

                <div className='property-infos'>

                    <h2>{ property[0].title }</h2>

                    <p>{ property[0].location }</p>

                </div>

                <div className='host-infos'>
                    
                    <p>{ property[0].host.name }</p>

                    <img src={ property[0].host.picture } alt='host-pictures'></img>
                    
                </div>

                <div className='property-tags'>
                    {property[0].tags.map((tag, index) => (
                        <span className='tags' key={index}>{tag}</span>
                    ))}
                </div>

                <div className='property-ratings'>
                    {[...Array(Number(property[0].rating))].map((_, index) => (
                        <img src={starIcon} className='ratings' key={index} alt='ratings'/>
                    ))}

                    {[...Array(5-Number(property[0].rating))].map((_, index) => (
                        <img src={greyStarIcon} className='ratings' key={index} alt='ratings'/>
                    ))}
                    
                </div>

                <div className='property-description' onClick={OpenDropDown}>

                    <h2 className='description' >Decription</h2>

                    <img className='arrow-drop-down' src={arrow} alt="arrow-drop-down" />

                    <div className='description-text'>{property[0].description}</div>

                </div>

            </div>
        </div>
    );
}
 
export default Property;