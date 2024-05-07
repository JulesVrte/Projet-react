import { Link } from 'react-router-dom';

const Card = ({logement}) => {
    return (
        <Link to={`/property/${logement.id}`} className="card">

            <div className="card">

                <img className='image-card' src={logement.cover} alt="cover" />

                <h1 className='title-card'>{logement.title}</h1>

            </div>
            
        </Link>
     );
}
 
export default Card;

