import bannerHomepage from '../img/banner-homepage.png'
import Card from '../components/Card'
import logements from '../logement';
import Banner from '../components/Banner';

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