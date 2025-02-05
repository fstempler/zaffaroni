import './navbar.css'
//images
import logo from '../../assets/zaffaroni-logo-noBckg.png'
//components
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar__MainContainer">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} className='navbarLogo' alt='Zaffaroni Logo'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/comprar">Comprar</Link>
                        </li>        
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/vender">Vender</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/alquilar">Alquilar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/emprendimientos">Emprendimientos</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/campos">Campos</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/nosotros">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contacto</Link>
                        </li>
                    </ul>      
                </div>
            </div>
        </nav>
    )
}

export default Navbar;