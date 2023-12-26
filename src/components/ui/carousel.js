import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

const Carrusel = () => {
    return(
        <div id="carousel">
            <Carousel>
                <Carousel.Item interval={3000}>
                <img
                    src="/1.jpg"
                    alt="Wolf"
                />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    src="/2.jpg"
                    alt="Forest"
                />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    src="/3.jpg"
                    alt="House"
                />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carrusel