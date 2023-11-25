import Carousel from "../ui/carousel"
import About from "./about"
import Contact from "./contact"
import Curve from '../../resources/curva.png'
import Links from "../ui/links"
import './style.css'
import Toast from "../toast/Toast"

const Home = () => {
    return(
        <div className="homeWrapper">
            <Carousel/>
            <About/>
            <Toast />
            <img id="curve" src={ Curve } alt="imagen decorativa"/>
            <Contact/>
            <Links/>
        </div>
    )
}
export default Home