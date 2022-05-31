import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap"
import './style.css'

const ProductCard = (props) => {

    return(
        <Card border="dark">
            <Card.Img variant="top" src={props.src} alt={props.title}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>${props.price}</Card.Text>
                <Card.Subtitle>{props.category}</Card.Subtitle>
                <Button>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}
export default ProductCard