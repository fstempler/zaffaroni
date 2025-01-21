import { Link } from 'react-router-dom';
import './sortBar.css';

const SortBar = () => {
    return (
        <>
        <div className='sortNavbar__Container'>
        <nav className="navbar navbar-expand-lg sortNavbar__MainContainer">
            <div className="container-fluid">
                <p className="navbar-brand" href="#">Propiedades Disponibles</p>
                    <button className="navbar-toggler sortNavbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#sortNavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon sortNavbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="sortNavbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="https://www.google.com.ar/maps"><span className='sortNavbar__Text'><i className="bi bi-geo-alt-fill"></i> Ver Mapa</span></Link>
                        </li>                        
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className='sortNavbar__Text'><i className="bi bi-arrow-down-up"></i> Ordenar</span>
                            </Link>
                                <ul className="dropdown-menu sortBar__Dorpdown">
                                    <li><Link className="dropdown-item" href="#"><span className='sortNavbar__Text sortBar__Dropdown-Item'>Precio: Mayor a menor</span></Link></li>
                                    <li><Link className="dropdown-item" href="#"><span className='sortNavbar__Text sortBar__Dropdown-Item'>Precio: Menor a mayor</span></Link></li>                                    
                                </ul> 
                        </li>                        
                    </ul>                
                </div>
            </div>
        </nav>
        </div>
        </>
    )
}

export default SortBar;