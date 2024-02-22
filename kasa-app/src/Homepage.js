import bannerHomepage from './banner-homepage.png';

const Homepage = () => {
    return ( 
        <div className="homepage">

            <div className="banner">

                <img src={bannerHomepage} alt="banner" />

                <h1 className='title'>Chez vous, partout et ailleurs</h1>

            </div>

            <div className="gallery">
                
            </div>

        </div>
     );
}
 
export default Homepage;