import './solucionesCard.css';

const SolucionesCard = ({ data, subtitle, text }) => {
    return (
        <div className="soluciones-card" style={{ width: '18em' }}>  
            <div className="solucionesCard-body">
                <h5 className="card-data">{data}</h5>
                <h4 className="card-subtitle">{subtitle}</h4>
                <p className="card-text">{text}</p>                
            </div>
        </div>
    )
}

export default SolucionesCard;