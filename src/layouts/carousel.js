import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

const Carrusel = () => {
    return(
        <div id="carousel">
            <Carousel>
                <Carousel.Item interval={3000}>
                <img
                    src="https://drive.google.com/uc?id=1iDjNDaHZ19iVsFQNUbofvJiVH9uttSKx&export=media"
                    alt="Image One"
                />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    src="https://drive.google.com/uc?id=1vTBMZ4LwwcE1Yo37ojbRdr4O8S-cSZp0&export=media"
                    alt="Image Two"
                />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    src="https://drive.google.com/uc?id=1aPJpzpfD-rJvpUtzG0njqiLsKP-QfbnZ&export=media"
                    alt="Image Three"
                />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carrusel