import './tuCasa.css'
//Components
import tuCasa from '../../assets/tuCasa-img.png';
import Btn from '../BtnRedBorder/BtnRedBorder';

const TuCasa = () => {
    return (
        <section className='tuCasa__MainContainer'>
            
                <div className='row'>
                    <div className='col-12 col-lg-6 tuCasa__col-left'>
                        <div className='tuCasa__TextContainer'>
                            <h2 className='tuCasa__Title'>Tu Casa La <br/>Encontras Acá</h2>
                            <p className='tuCasa__Text'>Lorem ipsum dolor sit amet consectetur adipiscing elit lacus netus, facilisis orci tellus magna dui per mattis cras maecenas, ullamcorper ante rhoncus enim venenatis dignissim odio egestas. </p>
                            <Btn text='Ver Más' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 tuCasa__col-right'>                        
                        <img src={tuCasa} alt="Casa" className='tuCasa__Img' />
                    </div>
                
            </div>
        </section>
    )
}

export default TuCasa; 