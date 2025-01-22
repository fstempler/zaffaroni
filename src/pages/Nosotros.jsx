
import './styles/nosotros.css'
//Images
import Historia from '../assets/historia-back.png';
import Valores from '../assets/valores-back.png';
//components
import ServiciosCard from '../components/ServiciosCard/ServiciosCard';

const Nosotros = () => {
    return (
        <section className='nosotros__MainContainer'>
            <div className='nosotros__Hero-Container'>
                <div className='nosotros__Hero-Text-Container'>
                    <h1 className='nosotros__Hero-Title'>+ 50 AÑOS,</h1>
                    <h2 className='nosotros__Hero-Subtitle'>CUMPLIENDO SUEÑOS EN ARRECIFES</h2>
                </div>                
            </div>
            <div className='nosotros__Content-Container'>
                <div className='nosotros__Content-Historia-Container row'>
                    <div className='col-12  col-sm-4 nosotros__Content-Historia-Text-Container'>
                        <h2>Historia</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat vulputate enim, cursus aptent praesent leo velit interdum diam dapibus convallis lectus fringilla, dis et etiam hendrerit nisi phasellus elementum sociosqu turpis. Mollis himenaeos quam ac aptent conubia proin convallis, consequat lacus phasellus risus fringilla molestie, platea pellentesque per nullam senectus turpis. Nisl phasellus primis maecenas libero mi platea est gravida commodo cum netus interdum duis feugiat purus, risus dui luctus viverra pulvinar senectus natoque nunc rutrum aenean rhoncus erat eleifend aliquam.</p>
                    </div>
                    <div className='col-12 col-sm-8 nosotros__Content-Historia-Image'>
                        <img src={Historia} alt="Historia" />
                    </div>
                </div>
                <div className='nosotros__Content-Valores-Container row'>
                    <div className='col-12 col-sm-8 nosotros__Content-Valores-Image'>
                        <img src={Valores} alt="Historia" />
                    </div>
                    <div className='col-12 col-sm-4 nosotros__Content-Valores-Text-Container'>
                        <h2>Valores</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat vulputate enim, cursus aptent praesent leo velit interdum diam dapibus convallis lectus fringilla, dis et etiam hendrerit nisi phasellus elementum sociosqu turpis. Mollis himenaeos quam ac aptent conubia proin convallis, consequat lacus phasellus risus fringilla molestie, platea pellentesque per nullam senectus turpis. Nisl phasellus primis maecenas libero mi platea est gravida commodo cum netus interdum duis feugiat purus, risus dui luctus viverra pulvinar senectus natoque nunc rutrum aenean rhoncus erat eleifend aliquam.</p>
                    </div>
                </div>
                <div className='nosotros__Content-Servicios-Container row'>
                    <div className='col-12 col-sm-4 nosotros__Content-Servicios-Text-Container'>
                        <h2>Servicios</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit placerat vulputate enim, cursus aptent praesent leo velit interdum diam dapibus convallis lectus fringilla, dis et etiam hendrerit nisi phasellus elementum sociosqu turpis. Mollis himenaeos quam ac aptent conubia proin convallis, consequat lacus phasellus risus fringilla molestie, platea pellentesque per nullam senectus turpis. Nisl phasellus primis maecenas libero mi platea est gravida commodo cum netus interdum duis feugiat purus, risus dui luctus viverra pulvinar senectus natoque nunc rutrum aenean rhoncus erat eleifend aliquam.</p>
                    </div>
                    <div className='col-12 col-sm-8 nosotros__Content-Servicios-Image'>
                        <ServiciosCard
                        icon={"bi bi-hand-thumbs-up-fill"}    
                        title={"Tasaciones"}
                        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit placerat vulputate enim, cursus aptent praesent leo velit interdum diam dapibus convallis lectus fringilla, dis et etiam hendrerit nisi phasellus elementum sociosqu turpis."}
                        />
                        <ServiciosCard
                        icon={"bi bi-house-door-fill"}    
                        title={"Ventas y Alquileres"}
                        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit placerat vulputate enim, cursus aptent praesent leo velit interdum diam dapibus convallis lectus fringilla, dis et etiam hendrerit nisi phasellus elementum sociosqu turpis."}
                        />
                        <ServiciosCard
                        icon={"bi bi-gear-fill"}    
                        title={"Administración de Alquileres"}
                        text={"Lorem ipsum dolor sit amet consectetur adipiscing elit placerat vulputate enim, cursus aptent praesent leo velit interdum diam dapibus convallis lectus fringilla, dis et etiam hendrerit nisi phasellus elementum sociosqu turpis."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros