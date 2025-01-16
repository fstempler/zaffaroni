//style
import './styles/home.css';
//Components
import Hero from '../components/Hero/Hero';
import ActionNavbar from '../components/ActionNavbar/ActionNavbar';
import Destacadas from '../components/Destacadas/Destacadas';
import Lisandro from '../components/Lisandro/Lisandro';
import Soluciones from '../components/Soluciones/Soluciones';
import TuCasa from '../components/TuCasa/TuCasa';
import Tierras from '../components/Tierras/Tierras';
import Tasaciones from '../components/Tasaciones/Tasaciones';
const Home = () => {
    return (
        <>
        <div className='hero__MainContainer'>
            <Hero />
            <ActionNavbar />
            <Destacadas />
            <Lisandro />
            <Soluciones />
            <TuCasa />
            <Tierras />
            <Tasaciones />
        </div>
        </>
    )
}

export default Home;