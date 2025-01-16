import './actionNavbar.css'
import { Link } from 'react-router-dom'

const ActionNavbar = () => {
    return (
        <section className='actionNavbar__Container'>
            <ul className='actionNavbar'>
                <Link to="/comprar"><li><p>Quiero Comprar</p></li></Link>
                <Link to="/alquilar"><li><p>Quiero Alquilar</p></li></Link>
                <Link to="/vender"><li><p>Quiero Vender</p></li></Link>
                <Link to="/emprendimientos"><li><p>Emprendimientos</p></li></Link>
            </ul>
        </section>
    )
}

export default ActionNavbar;