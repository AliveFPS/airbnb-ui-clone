import Image from '../images/photo-grid.png'

function Hero(){
    return(
        <div>
            <img src={Image} alt="heroLogo" className="hero--logo"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive actvities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero