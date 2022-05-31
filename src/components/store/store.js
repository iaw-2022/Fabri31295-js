import React, {useState, useEffect} from 'react'
import ProductCard from '../ui/card'
import Links from "../ui/links"
import Filter from '../ui/filter'
import './style.css'

export default function Store() {

    const [ images, setImages ] = useState([])
    const [cartItems, setCartItems] = useState([])

    const URL = 'https://proyecto-api-fabricio.herokuapp.com/images'
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setImages(data)
    }
    
    const results = images.filter((dato)=> dato.price !== 0)

    useEffect( ()=> {
        showData()
      }, [])

    return(
        <div className='store'>
            <h1>STORE</h1>
            <div className="storeWrapper">
                {results.map((image) => (
                    <ProductCard 
                        title={image.name} 
                        price={image.price} 
                        category={image.category}
                        src={image.url} 
                        alt={image.name}
                    />
                ))}
            </div>
            <Links/>
        </div>
    )
}