import Carousel from "../ui/carousel"
import About from "./about"
import Contact from "./contact"
import Curve from '../../resources/curva.png'
import Links from "../ui/links"
import { handleSubscription } from "../../subscription"
import './style.css'

const Home = () => {

    const componentDidMount = async() => {
        try {
           await handleSubscription(this.props.user)
        } catch (error) {
            console.log('Error in componentDidMount, error')
        }
    }

    return (
        <div className="homeWrapper">
            {componentDidMount}
            <Carousel />
            <About />
            <img id="curve" src={Curve} alt="imagen decorativa" />
            <Contact />
            <Links />
        </div>
    )
}
export default Home