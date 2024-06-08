import Image from '../images/photo-grid.png'

function Hero(){
    return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet"></link>
            <img src={Image} alt="heroLogo" className="hero--logo"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive actvities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}

export default Hero