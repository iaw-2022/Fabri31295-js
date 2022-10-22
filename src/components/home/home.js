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

    const [initialized, setInitialized] = useState(false);

    const loguearse = () => {
        signInAnonymously(getAuth()).then(usuario => console.log(usuario));
    }

    const activarMensajes = async () => {

        const token = await getToken(messaging, {
            vapidKey: "BG3-G5lDTR8NFNPdJUKWxicnQukXCnafR4PQFArTpTvWdkAbStOynadt4E4kAz1AlY8ulxcLc8dxblY8BPBzuV4"
        }).catch(error => console.log('error al querer agarrar el token amigo'));

        if (token) {
            console.log(token)
        }
    }

    React.useEffect(() => {
        onMessage(messaging, message => {
            console.log("tu mensaje:", message);
            toast(message.notification.title);
        })
        if (!initialized) {
            loguearse();
            activarMensajes();
            setInitialized(true)
        }
    }, []);

    return (
        <div className="homeWrapper">
            <ToastContainer />
            <Carousel />
            <About />
            <img id="curve" src={Curve} alt="imagen decorativa" />
            <Contact />
            <Links />
        </div>
    )
}
export default Home