import './tierras.css'
//Components
import Btn from '../BtnRedBorder/BtnRedBorder';

const Tierras = () => {
    return (
        <section className='tierras__MainContainer'>
            <div className='row'>
                <div className='col-12 col-lg-4'>
                    
                </div>
                <div className='col-12 col-lg-8 colContainer'>
                    <div className='tierras__TextContainer'>
                        <h2 className='tierras__Title'>Encontrá las mejores tierras para invertir, producir o disfrutar</h2>
                        <p className='tierras__Text'>Lorem ipsum dolor sit amet consectetur adipiscing elit lacus netus, facilisis orci tellus magna dui per mattis cras maecenas, ullamcorper ante rhoncus enim venenatis dignissim odio egestas.</p>
                        <Btn text='Ver Más' />
                    </div>    
                </div>
            </div>            
                                
        </section>
    )
}

export default Tierras; 