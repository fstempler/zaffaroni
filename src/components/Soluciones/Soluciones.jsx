import './soluciones.css'
//Components
import SolucionesCard from '../SolucionesCard/SolucionesCard';

const Soluciones = () => {
    return (
        <section className='soluciones__MainContainer'>
            <div className='soluciones__TitleContainer'>
                <p className='soluciones__PreTitle'>Por Qué Elegirnos</p>
                <h2 className='soluciones__Title'>Soluciones Inmobiliarias</h2>
            </div>
            <div className='soluciones__CardContainer'>
                <SolucionesCard 
                data={"+20"}
                subtitle={"Años de Experiencia en el Mercado"}
                text={"Nuestra inmobiliaria lleva más de dos décadas ayudando a familias y empresas a encontrar la propiedad perfecta en Arrecifes y sus alrededores."}
                />
                <SolucionesCard 
                data={"95%"}
                subtitle={"de Satisfacción de Cliente"}
                text={"Casi todos nuestros clientes nos recomiendan por nuestro servicio personalizado y compromiso en cada transacción."}
                />
                <SolucionesCard 
                data={"+100"}
                subtitle={"Propiedades Explusivas"}
                text={"Contamos con una cartera diversa de propiedades exclusivas, adaptadas a todos los gustos y necesidades."}
                />
            </div>
        </section>
    )
}

export default Soluciones; 