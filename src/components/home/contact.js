import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Carta from '../../resources/carta.png'
import './style.css'

const Contact = () => {
    return(
        <div class="contactWrapper">
            <div class="contactLeft">
                <h1>Contact Us</h1>
                <h2>Feel free to get in touch with me. I am always open to discussing<br/> new projects, creative ideas or opportunities to be part of your<br/> visions</h2>
                <div class="icons-contact">
                    <a><FontAwesomeIcon icon={faEnvelope}/></a>
                    <p>Mail me <br/>fabricioalmaraz123@gmail.com</p>
                    <a><FontAwesomeIcon icon={faPhone} /></a>
                    <p>Call me <br/> +1 333 454 55 44</p>
                </div>
            </div>
            <div class="contactRight">
            <img id="carta" src={ Carta } alt="carta"/>
                <p id="contactUs">Contact Us</p>
                <input id="name-form" type="string" required placeholder="Enter your name"/>
                <input id="email-form" type="string" required placeholder="Enter a valid email adress"/>
                <input id="message-form" type="string" required placeholder="Enter your message"/>
                <p>Submit</p>
            </div>
        </div>
    )
}
export default Contact