import './lisandro.css';
//Images
import LisandroLogo from "../../assets/LZaffaroni Logo.png";
import obra1 from "../../assets/obra1.png";

const Lisandro = () => {
    return (
        <section className='lisandro__MainContainer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className='lisando__Logo-Container'>
                            <img src={LisandroLogo} alt='Lisandro Zaffaroni Logo' className='lZaffaroniLogo' />
                        </div>                        
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className='lisandro__Works-Container'>
                            <img src={obra1} alt='Trabajo' className='lZaffaroniObra' />
                            <img src={obra1} alt='Trabajo' className='lZaffaroniObra' />
                            <img src={obra1} alt='Trabajo' className='lZaffaroniObra' />
                            <img src={obra1} alt='Trabajo' className='lZaffaroniObra' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lisandro;