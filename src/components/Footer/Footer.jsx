import './footer.css'
//components
import Btn from '../BtnRedBorder/BtnRedBorder';
//images
import logo from '../../assets/zaffaroni-logo-noBckg.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer__MainContainer'>
            <div className='footer__Content-Container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='footer__Text-Container'>
                            <h2 className='footer__Title'>Hablemos</h2>
                            <p className='footer__Text'>Lorem ipsum dolor sit amet consectetur adipiscing elit lacus netus, facilisis orci tellus magna dui per mattis cras maecenas, ullamcorper ante rhoncus enim venenatis dignissim odio egestas. </p>
                            <Link to="/contact" className='contact__Btn'><Btn
                            text={"Contacto"}
                            /></Link>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className='footer__Links-Container'>
                            <ul>
                                <li><img src={logo} className='footer__Links-Logo' alt='Logo Zaffaroni' /></li>
                                <Link to="/"><li>Inicio</li></Link>
                                <Link to="/comprar"><li>Comprar</li></Link>
                                <Link to="/vender"><li>Vender</li></Link>
                                <Link to="/alquilar"><li>Alquilar</li></Link>
                                <Link to="/emprendimientos"><li>Emprendimientos</li></Link>
                                <Link to="/campos"><li>Campos</li></Link>
                                <Link to="/contact"><li>Cotacto</li></Link>
                                <Link to="/nosotros"><li>Nosotros</li></Link>
                            </ul>
                        </div>
                    
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className='footer__Contacto-Container'>
                            <ul>
                                <li><h5 className='footer__Contacto-Title'>Contacto</h5></li>
                                <li><i className="bi bi-telephone-fill"></i> 02478 408621</li>
                                <li><i className="bi bi-envelope-fill"></i> zaffaroni@gmail.com</li>
                                <li><i className="bi bi-geo-alt-fill"></i> Irlanda 222, Arrecifes, Bs. As.</li>
                                <li>
                                    <div className='footer__Contacto-Icons-Container'>
                                        <i className="bi bi-instagram"></i>
                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-whatsapp"></i>
                                    </div>                                
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer__Copyright-Container'>
                    <p>© Zaffaroni Propiedades - Todos los derechos reservados</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;