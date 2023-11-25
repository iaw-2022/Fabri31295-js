import React, {useState, useEffect} from 'react'
import { BASE_URL } from '../../utilities'
import './style.css'

const Filter = (props) => {
    
    const [ images, setImages ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ resolutions, setResolutions ] = useState([])
    const [ resultCategories, setResultCategories ] = useState("")
    const [ resultResolutions, setResultResolutions ] = useState("")
    const [ resultInput, setResultInput ] = useState("")

    const URLImages = BASE_URL + '/images'
    const URLCategories = BASE_URL + '/categories'
    const ULRResolutions = BASE_URL + '/resolutions'

    const showData = async () => {
        const response = await fetch(URLImages)
        const response2 = await fetch(URLCategories)
        const response3 = await fetch(ULRResolutions)
        setImages(await response.json())
        setCategories(await response2.json())
        setResolutions(await response3.json())
    }

    useEffect( ()=> {
        showData()
      }, [])

    const searcherCategory = (e) => {
        setResultCategories(e.target.value)   
    }

    const searcherResolution = (e) => {
        setResultResolutions(e.target.value)   
    }

    const searcherInput = (e) => {
        setResultInput(e.target.value)   
    }

    // metodo de filtrado   
    const results = !(resultCategories||resultResolutions||resultInput) ? images : images.filter((dato) => (
        dato.category.toLowerCase().includes(resultCategories.toLocaleLowerCase()) &&
        dato.resolution.toLowerCase().includes(resultResolutions.toLocaleLowerCase()) && (
            dato.name.toLowerCase().includes(resultInput.toLocaleLowerCase()) || 
            dato.date.toLowerCase().includes(resultInput.toLocaleLowerCase()) ||
            dato.id.toLowerCase().includes(resultInput.toLocaleLowerCase())
        )
    ))

    return(
        <div>
            <div className='filterWrapper'>
                <p> Category:&nbsp;
                    <select onChange={searcherCategory}>
                        <option value="">All</option>
                        {categories.map((category) => (  
                            <option value={category.value}>{category.name}</option>
                        ))}
                    </select>
                </p>
                <p> Resolution:&nbsp;
                    <select onChange={searcherResolution}>
                        <option value="">All</option>
                        {resolutions.map((resolution) => (  
                            <option value={resolution.value}>{resolution.name}</option>
                        ))}
                    </select>
                </p>
                <form action="../../form-result.php" method="post">
                    <p>
                        Image search:&nbsp;
                        <input 
                            type="text" 
                            placeholder="Name, date, id..."
                            onChange={searcherInput}
                        />
                    </p>
                </form>
            </div>
            <div>
                <div className='results'>
                {results.map((imagen) => (
                    <div className="imageGrid">
                        <a>
                            <img src={imagen.url} alt={imagen.name}/>
                        </a>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Filter