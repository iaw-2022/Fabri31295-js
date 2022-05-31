import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import perfil from '../../resources/perfil.png'
import './style.css'

const About = () => {
    return(
        <div class="aboutWrapper">
            <div class="aboutLeft">
                <img src={perfil} alt="Joaquin"/>
            </div>
            <div class="aboutRight">
                <h1>Hey! My name is Fabricio. I am a web &amp; font <span class="introBreak"></span>designer based in Bahia Blanca</h1>
                <h2>I have been working as a freelance designer and front-end developer since 2007. I’ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.</h2>
                <div class="icons">
                    <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href=""><FontAwesomeIcon icon={faPinterest} /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>
    )
}
export default About



