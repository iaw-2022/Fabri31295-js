import React, { useState } from "react";
import Carousel from "../ui/carousel"
import About from "./about"
import Contact from "./contact"
import Curve from '../../resources/curva.png'
import Links from "../ui/links"
import './style.css'

import { getAuth, signInAnonymously } from "firebase/auth";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {

    const [clicked, setClicked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const loguearse = () => {
        if (!loggedIn) {
            signInAnonymously(getAuth()).then(usuario => console.log(usuario));
            setLoggedIn(true)
        }
    }

    const activarMensajes = async () => {

        if (!clicked) {
            const token = await getToken(messaging, {
                vapidKey: "BG3-G5lDTR8NFNPdJUKWxicnQukXCnafR4PQFArTpTvWdkAbStOynadt4E4kAz1AlY8ulxcLc8dxblY8BPBzuV4"
            }).catch(error => console.log('error al querer agarrar el token amigo'));

            if (token) {
                setClicked(true)
                console.log(token)
            }
        } else {
            setClicked(false);
        }
    }

    React.useEffect(() => {
        onMessage(messaging, message => {
            console.log("tu mensaje:", message);
            toast(message.notification.title);
        })
    }, []);

    return (
        <div className="homeWrapper">
            <ToastContainer />
            {loguearse()}
            {!clicked && <button
                className="notificationsButton"
                onClick={activarMensajes}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
            </button>}
            {clicked && <button
                className="notificationsButton"
                onClick={activarMensajes}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell-slash-fill" viewBox="0 0 16 16">
                    <path d="M5.164 14H15c-1.5-1-2-5.902-2-7 0-.264-.02-.523-.06-.776L5.164 14zm6.288-10.617A4.988 4.988 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113l9.73-9.73zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                </svg>
            </button>}
            <Carousel />
            <About />
            <img id="curve" src={Curve} alt="imagen decorativa" />
            <Contact />
            <Links />
        </div>
    )
}
export default Home