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
                <h1>Hey! My name is Fabricio. I am a graphic &amp; font <span class="introBreak"></span>designer based in Bahia Blanca</h1>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
                <div class="icons">
                    <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="/"><FontAwesomeIcon icon={faPinterest} /></a>
                    <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>
    )
}
export default About



