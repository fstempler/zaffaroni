import './blueBtn.css';

const BlueBtn = ({ onClickAction, text, icon }) => {
    return (
        <button onClick={onClickAction} className='applyFilterBtn'>{text} <i className={icon}></i></button>
    )
}

export default BlueBtn