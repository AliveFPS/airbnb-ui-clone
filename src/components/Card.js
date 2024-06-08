import KatieImage from '../images/katie-zaferes.png'
import Star from '../images/star.png'

function Card(){
    return (
       <div>
        <img src={KatieImage} alt="Katie" className="div--image"/>
        <ul className="Rating">
            <img src={Star} className="Star" alt="Star"/>
            <li>5.0</li>
            <li>(6)</li>
            <li>*</li>
            <li>USA</li>
        </ul>
        <p>Life lessongs with Katie Zaferes</p>
        <p>From $136 / person</p>
       </div>
    )
}

export default Card