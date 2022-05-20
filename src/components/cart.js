import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from '../layouts/table'

const Cart = () => {
    return(
        <div className='cart'>
            <a><FontAwesomeIcon icon={faShoppingBag}/>&nbsp; My Cart</a>
            <Table/>
        </div>
    )
}

export default Cart