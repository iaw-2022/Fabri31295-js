import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';

const Carrusel = () => {
    return(
        <div>
            <div id="carousel" style={{ display: 'inline-block', maxWidth:1000, padding: 30 }}>
            <h4>React-Bootstrap Carousel Component</h4>
            <Carousel>
                <Carousel.Item interval={3000}>
                <img
                    src="https://drive.google.com/uc?id=1mxqRMbxMmtfQ30CbsqBeujSeBgx7ToEw&export=media"
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h3>Label for first slide</h3>
                    <p>Sample Text for Image One</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    src="https://drive.google.com/uc?id=11pUU6yS9HvLUOaXGYvK-1dq3v9SxxEOM&export=media"
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h3>Label for second slide</h3>
                    <p>Sample Text for Image Two</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img
                    src="https://drive.google.com/uc?id=1CUOweaBn-GV5cR3vqQYZP_DH-yyk-c9t&export=media"
                    alt="Image Three"
                />
                <Carousel.Caption>
                    <h3>Label for third slide</h3>
                    <p>Sample Text for Image Three</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}
export default Carrusel