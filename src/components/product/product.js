import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from "react-bootstrap"
import CartContext from '../../context/cartContext'
import { useNotification } from '../../notifications/NotificationProvider'
import { BASE_URL } from '../../utilities'
import './style.css'

const Product = () => {
    const [images, setImages] = useState([])
    const { addItemToCart } = useContext(CartContext)
    const dispatch = useNotification();

    const URL = BASE_URL + '/images'
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setImages(data)
    }

    const results = images.filter((dato) => dato.price !== 0)

    useEffect(() => {
        showData()
    }, [])

    const handleSubmit = (image) => {
        addItemToCart(image)
        handleNewNotification()
    }

    const handleNewNotification = () => {
        dispatch({
            type: "SUCCESS",
            message: "Successfully added to cart!!",
            title: "Successful Request"
        })
    }

    return (
        <div className='store'>
            <h1>STORE</h1>
            <div className="storeWrapper">
                {results.map((image) => (
                    <Card border="dark">
                        <Card.Img variant="top" src={image.url} alt={image.name} />
                        <Card.Body>
                            <Card.Title>{image.name}</Card.Title>
                            <Card.Text>${image.price}</Card.Text>
                            <Card.Subtitle>{image.category}</Card.Subtitle>
                            <Button
                                onClick={() => handleSubmit(image)}
                            >
                                Add to cart
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Product