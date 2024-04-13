import starIcon from './img/star-icon.svg';
import greyStarIcon from './img/grey-star-icon.svg';
import BoxInput from './BoxInput';

const PropertyInfos = ({property}) => {
    return (  
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

            <div className='property-description-equipments'>

            < BoxInput title="Description" value={<p>{property[0].description}</p>} key="description"/>

            < BoxInput title="Equipements" value={<ul>{property[0].equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}</ul>} key="equipments"/>

            </div>

        </div>
    );
}
 
export default PropertyInfos;