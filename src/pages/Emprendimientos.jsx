

import './styles/emprendimientos.css'
//images
import card1 from '../assets/emprendimientos/emprendimiento-1.png';
import card2 from '../assets/emprendimientos/emprendimiento-2.png';
import card3 from '../assets/emprendimientos/emprendimiento-3.png';
import card4 from '../assets/emprendimientos/emprendimiento-4.png';

//components
import SortBar from '../components/SortBar/SortBar';
import EmprendimientosCard from '../components/EmprendimientosCard/EmprendimientosCard';
import Tierras from '../components/Tierras/Tierras'
import Tasaciones from '../components/Tasaciones/Tasaciones'

const Emprendimientos = () => {
    return (
        <section className='emprendimientos__MainContainer'>
            <SortBar />
            <div className='emprendimientos__Cards-Container'>
                <EmprendimientosCard
                barrio={'Las Flores'}
                title={'Frascheri 164'}
                description={'1, 2 y 3 ambientes'}
                price={'U$S 75.000'}
                image={card1}
                />
                <EmprendimientosCard
                barrio={'Las Flores'}
                title={'Frascheri 164'}
                description={'1, 2 y 3 ambientes'}
                price={'U$S 75.000'}
                image={card2}
                />
                <EmprendimientosCard
                barrio={'Las Flores'}
                title={'Frascheri 164'}
                description={'1, 2 y 3 ambientes'}
                price={'U$S 75.000'}
                image={card3}
                />
                <EmprendimientosCard
                barrio={'Las Flores'}
                title={'Frascheri 164'}
                description={'1, 2 y 3 ambientes'}
                price={'U$S 75.000'}
                image={card4}
                />
            </div>
            <Tierras />
            <Tasaciones />
        </section>
    )
}

export default Emprendimientos