import { Navigate, useParams} from 'react-router-dom';
import logements from '../logement';
import PropertySlider from '../components/PropertySlider';
import PropertyInfos from '../components/PropertyInfos';



const Property = () => {
    const { id } = useParams();
     
    const property = logements.filter((element) => element.id === id);
    
    if (property[0] === undefined) {
        return <Navigate to="*" replace={true} />
    }

    return ( 
        <div className="property">
            
            < PropertySlider propertyPictures={property[0].pictures} />

            < PropertyInfos property={property} />

        </div>
    );
}
 
export default Property;