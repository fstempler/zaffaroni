import './tasaciones.css'
//Images
import tasaciones from '../../assets/tasaciones.png'
//Components
import Btn from '../BtnRedBorder/BtnRedBorder';

const Tierras = () => {
    return (
        <section className='tasaciones__MainContainer'>            
                <div className='tasaciones__TextContainer'>
                    <h2 className='tasaciones__Title'>Encontrá las mejores tierras para invertir, producir o disfrutar</h2>
                    <p className='tasaciones__Text'>Lorem ipsum dolor sit amet consectetur adipiscing elit lacus netus, facilisis orci tellus magna dui per mattis cras maecenas, ullamcorper ante rhoncus enim venenatis dignissim odio egestas.</p>
                    <Btn text='Ver Más' />
                </div>  
                <div className='tasaciones__ImgContainer'>
                    <img src={tasaciones} alt='Casa en mano' className='tasaciones__Img' />
                </div>
        </section>
    )
}

export default Tierras; 