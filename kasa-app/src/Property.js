import { useParams} from 'react-router-dom';
import logements from './logement';
import PropertySlider from './PropertySlider';
import PropertyInfos from './PropertyInfos';



const Property = () => {
    const { id } = useParams();

    const property = logements.filter((element) => element.id === id);

    return ( 
        <div className="property">
            
            < PropertySlider propertyPictures={property[0].pictures} />

            < PropertyInfos property={property} />

        </div>
    );
}
 
export default Property;