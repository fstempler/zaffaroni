import GoogleMap from '../components/GoogleMap/GoogleMap'
import Tierras from '../components/Tierras/Tierras'
import TuCasa from '../components/TuCasa/TuCasa'
import Tasaciones from '../components/Tasaciones/Tasaciones'
import './styles/contact.css'

const Contact = () => {
    return (
        <section className='contact__MainContainer'>
            
            <div className='row contact__Content-Container'>
            <h1 className='contact__Title'>Contacto</h1>
                <div className='col-12 col-sm-6'>
                <form className='form__Container'>
                    <div className="mb-3">                        
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder='Nombre y apellido'    
                        />                        
                    </div>
                    <div className="mb-3">                        
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder='Email'    
                        />                        
                    </div>
                    <div className="mb-3">                        
                        <input 
                            type="telephone" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder='Teléfono'    
                        />                        
                    </div>
                    <div className="mb-3">                        
                        <input 
                            type="address" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder='Dirección'    
                        />                        
                    </div>
                    <div className="mb-3">                        
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            placeholder='Categoría'    
                        />                        
                    </div>
                    <div className="mb-3">                        
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            placeholder='Mensaje'>                                
                        </textarea>
                    </div>                 

                    <button type="submit" className="btn btn-primary">Enviar</button>
                    <p>Al enviar se están aceptando los Términos y Condiciones de Uso y la Política de Privacidad</p>
                </form>

                </div>
                <div className='col-12 col-sm-6'>
                    <div className='contact__Data-Container'>
                        <div className='contact__Data'>
                            <i className="bi bi-telephone-fill"></i>
                            <h2>Teléfono</h2>
                            <h2>02478 40-8621</h2>
                        </div>
                        <div className='contact__Data'>
                            <i className="bi bi-envelope-at-fill"></i>
                            <h2>Email</h2>
                            <h2>zaffaroni@zaffaroni.com</h2>
                        </div>
                        <div className='contact__Data'>
                            <i className="bi bi-geo-alt-fill"></i>
                            <h2>Dirección</h2>
                            <h2>Irlanda 987, Arrecifes</h2>
                        </div>
                        <div className='contact__Data'>
                            <i className="bi bi-whatsapp"></i>
                            <h2>Whatsapp</h2>
                            <h2>02478-15-22443355</h2>
                        </div>                        
                    </div>
                    <div className='contact__Data-Map-Container'>
                        <GoogleMap 
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2040675631197!2d-60.09952620000001!3d-34.0642827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b99dc9dc0f7417%3A0xa67e9ca732162380!2sInmobiliaria%20Zaffaroni!5e0!3m2!1ses!2sar!4v1737558921653!5m2!1ses!2sar"}
                        width={"500"}
                        height={"250"}/>                        
                    </div>
                </div>
            </div>
            <TuCasa />
            <Tierras />
            <Tasaciones />
        </section>
    )
}

export default Contact


