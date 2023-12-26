import React, { useState, useEffect, useContext } from 'react'
import { Card, Button } from "react-bootstrap"
import CartContext from '../../context/cartContext'
import { Placeholder } from 'react-bootstrap'
import { useNotification } from '../../notifications/NotificationProvider'
import { BASE_URL } from '../../utilities'
import './style.css'

const Product = () => {
    const [images, setImages] = useState([])
    const { addItemToCart } = useContext(CartContext)
    const dispatch = useNotification();

    const URL = BASE_URL + '/images'

    const showData = async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          setImages(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

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

    const stylePlaceholder = {
        height: '145px',
        width: '250px', 
        margin: '0px 1% -10px 1%',
        borderRadius: '2px',
    }

    return (
        <div className='store'>
            <h1>STORE</h1>
            <div className="storeWrapper">
                {results ? results.map((image) => (
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
                )) : (
                    <div className='storePlaceholders'>
                    {[1, 2, 3, 4, 5, 8].map((index) => (
                        <div key={index}>
                            <Placeholder as="p" animation="glow">
                                <Placeholder xs={6} style={stylePlaceholder}/>
                            </Placeholder>
                            <Placeholder xs={3} />
                            <Placeholder xs={3} />
                        </div>
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product