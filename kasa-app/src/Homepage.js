import bannerHomepage from './img/banner-homepage.png'
import Card from './Card'
import logements from './logement.json';
import Banner from './Banner';

const Homepage = () => {
    return ( 
        <div className="homepage">

            <Banner src={bannerHomepage} text='Chez vous, partout et ailleurs' />

            <div className="gallery">
                {logements.map((element) => 
                    <Card logement={element} key={element.id} />
                )}
            </div>

        </div>
     );
}
 
export default Homepage;