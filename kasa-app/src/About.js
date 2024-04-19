import Banner from "./Banner";
import BoxInput from "./BoxInput";
import bannerAbout from './img/banner-about.jpg';
const About = () => {
    const aboutList = [
        {
        title: 'Fiabilité',
        content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        },
        {
        title: 'Respect',
        content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
        title: 'Service',
        content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
        title: 'Sécurité',
        content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ]; 
    
    return ( 
        <div className="about">
            <Banner src={bannerAbout} />

            <div className="about-content">
                {aboutList.map((element, index) => (
                < BoxInput title={element.title} value={<p>{element.content}</p>} key={index}/>
                ))}
            </div>

            </div>
     );
}
 
export default About;