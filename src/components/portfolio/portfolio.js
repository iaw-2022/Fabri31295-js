import React, {useState, useEffect} from 'react'
import Filter from '../ui/filter'
import Links from "../ui/links"
import './style.css'

const Portfolio = () => {

    return(
        <div className='portfolio'> 
            <Filter/>
            <Links/>
        </div>
    )
}

export default Portfolio