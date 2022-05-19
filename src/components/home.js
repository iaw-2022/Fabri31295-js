import Carousel from "../layouts/carousel"
import About from "./about"
import Curve from '../resources/curva.png'
import Contact from "./contact"
import Links from "../layouts/links"

const Home = () => {
    return(
        <div className="homeWrapper">
            <Carousel/>
            <About/>
            <img id="curve" src={ Curve }/>
            <Contact/>
            <Links/>
        </div>
    )
}
export default Home