import './btnRedBorder.css';

const BtnRedBorder = ({ text }) => {
    return (
        <div className='btnRedBorder__Container'>
            <h5 className='btnRedBorder__Text'>{text}</h5>
        </div>
    )
}

export default BtnRedBorder;