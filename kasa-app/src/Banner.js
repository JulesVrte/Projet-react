const Banner = ({src, text}) => {
    return ( 
    
    <div className="banner">

        <img src={src} alt="banner" />

        <h1 className='title'>{text}</h1>

    </div> );
}
 
export default Banner;