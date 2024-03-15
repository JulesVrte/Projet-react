const Card = ({logement}) => {
    return ( 
        <div className="card">
            <img className='image-card' src={logement.cover} alt="banner" />
            <h1 className='title-card'>{logement.title}</h1>
        </div>
     );
}
 
export default Card;

