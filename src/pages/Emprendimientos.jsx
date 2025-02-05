

import './styles/emprendimientos.css'
//components
import SortBar from '../components/SortBar/SortBar';
import EmprendimientosCard from '../components/EmprendimientosCard/EmprendimientosCard';
import Tierras from '../components/Tierras/Tierras'
import Tasaciones from '../components/Tasaciones/Tasaciones'
//data
import emprendimientosData from '../db/emprendimientos.json'

const Emprendimientos = () => {
    
    return (
        <section className='emprendimientos__MainContainer'>
            <SortBar />
            <div className='emprendimientos__Cards-Container'>
                
                {emprendimientosData.map((emprendimiento, index) => (
                    <EmprendimientosCard key={index} emprendimiento={emprendimiento} />
                ))
                }
                
            </div>
            <Tierras />
            <Tasaciones />
        </section>
    )
}

export default Emprendimientos