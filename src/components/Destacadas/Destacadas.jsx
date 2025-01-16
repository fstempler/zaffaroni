import './destacadas.css'
//Images
import destacadasImg from '../../assets/destacadas-card.png'
//Components
import DestacadasCard from '../DestacadasCard/DestacadasCard';

const Destacadas = () => {
    return (
        <section className='destacadas__MainContainer'>
            <h2 className='destacadas__Title'>Propiedades Destacadas</h2>
            <div className='destacadasCards__Container'>
                <DestacadasCard 
                title={"Nombre"}
                price={"$150.000"}
                imgSrc={destacadasImg}
                altText={"Casa"}
                squareMt={" 250"}
                ambients={"4 amb"}
                baths={" 2"}
                text={"Lorem ipsum dolor sit amet consectetur adipiscing elit mauris hendrerit nunc phasellus nascetur pharetra cum, rutrum tempor justo arcu litora natoque mi morbi dictumst hac et enim. "}
                />
                <DestacadasCard 
                title={"Nombre"}
                price={"$150.000"}
                imgSrc={destacadasImg}
                altText={"Casa"}
                squareMt={" 250"}
                ambients={"4 amb"}
                baths={" 2"}
                text={"Lorem ipsum dolor sit amet consectetur adipiscing elit mauris hendrerit nunc phasellus nascetur pharetra cum, rutrum tempor justo arcu litora natoque mi morbi dictumst hac et enim. "}
                />
                <DestacadasCard 
                title={"Nombre"}
                price={"$150.000"}
                imgSrc={destacadasImg}
                altText={"Casa"}
                squareMt={" 250"}
                ambients={"4 amb"}
                baths={" 2"}
                text={"Lorem ipsum dolor sit amet consectetur adipiscing elit mauris hendrerit nunc phasellus nascetur pharetra cum, rutrum tempor justo arcu litora natoque mi morbi dictumst hac et enim. "}
                />
            </div>
            
        </section>
    )
}

export default Destacadas;