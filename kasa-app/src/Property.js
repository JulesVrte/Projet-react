import { useParams} from 'react-router-dom';
import logements from './logement';


const Property = () => {
    const { id } = useParams();

    const property = logements.filter((element) => element.id === id);

    const slides = () => {
        const pictureNumbers = property[0].pictures.length;
        const slides = document.querySelectorAll('.slides');
        const leftButton = document.querySelector('.arrow.left');
        const rightButton = document.querySelector('.arrow.right');
        let currentSlide = 0;
        
    }

    return ( 
        <div className="property">
            <div className="property-slider">
                {property[0].pictures.map((slideImage, index)=> (
                    <div className='slides' key={index}>
                        
                        <div className='pictures' style={{backgroundImage: `url(${slideImage})`}}>
                    
                        </div>
                        
                    </div>
                ))} 
                <span className='arrow left' onClick={slides}>&#10094;</span>
                <span className='arrow right'>&#10095;</span>
            </div>
        </div>

     );
}
 
export default Property;