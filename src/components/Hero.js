import Image from '../images/photo-grid.png'

function Hero(){
    return(
        <section className="hero">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet"></link>
            <img src={Image} alt="heroLogo" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive actvities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero