import bannerHomepage from './banner-homepage.png'
import Card from './Card'

const Homepage = () => {
    return ( 
        <div className="homepage">

            <div className="banner">

                <img src={bannerHomepage} alt="banner" />

                <h1 className='title'>Chez vous, partout et ailleurs</h1>

            </div>

            <div className="gallery">

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>

        </div>
     );
}
 
export default Homepage;