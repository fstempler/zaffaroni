import './serviciosCard.css'

const ServiciosCard = ({ icon, title, text }) => {
    return (
        <div className='serviciosCard__Container'>
            <i className={icon}></i>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default ServiciosCard;