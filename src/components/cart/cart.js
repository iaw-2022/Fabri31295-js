import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Table from 'react-bootstrap/Table'
import './style.css'

export default function Cart(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = 50
    const totalPrice = 0

    return(
        <div className='cart'>
            <a><FontAwesomeIcon icon={faShoppingBag}/>&nbsp; My Cart</a>
            <Table id="table" bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Categoria</th>
                    <th>Nombre</th>
                    <th>Price</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}