
import { Link } from 'react-router-dom'
import './styles/vender.css'

const Vender = () => {
    return (
        <section className='vender__MainContainer'>
            <div className='vender__Hero-Container'>
                <h1>Tasaciones</h1>
                <div className='vender__Cta-Container'>
                    <Link to='/contact'>
                        <h2>
                        ¿Cuánto vale mi propiedad?
                        </h2>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}

export default Vender