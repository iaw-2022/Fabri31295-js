import { Carousel } from "react-bootstrap"

const Home = () => {
    return(
        <div className="homeWrapper">
            <div id="carousel">
                <Carousel>
                    <Carousel.Item interval={3000}>
                    <img
                        src="https://drive.google.com/uc?id=1mxqRMbxMmtfQ30CbsqBeujSeBgx7ToEw&export=media"
                        alt="Image One"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                    <img
                        src="https://drive.google.com/uc?id=11pUU6yS9HvLUOaXGYvK-1dq3v9SxxEOM&export=media"
                        alt="Image Two"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                    <img
                        src="https://drive.google.com/uc?id=1CUOweaBn-GV5cR3vqQYZP_DH-yyk-c9t&export=media"
                        alt="Image Three"
                    />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
export default Home