import bannerHomepage from './img/banner-homepage.png'
import Card from './Card'
import logements from './logement.json';

const Homepage = () => {
    return ( 
        <div className="homepage">

            <div className="banner">

                <img src={bannerHomepage} alt="banner" />

                <h1 className='title'>Chez vous, partout et ailleurs</h1>

            </div>

            <div className="gallery">
                {logements.map((element) => 
                    <Card logement={element} key={element.id} />
                )}
            </div>

        </div>
     );
}
 
export default Homepage;