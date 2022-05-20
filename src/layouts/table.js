import Table from 'react-bootstrap/Table'

const Tabla = () => {
    return(
        <Table id="table" bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Categoria</th>
                <th>Nombre</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Ilustracion</td>
                <td>Wolf</td>
                <td>100 U$S</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Fotografia</td>
                <td>Messi</td>
                <td>120 U$S</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Ilustracion</td>
                <td>Boat sea</td>
                <td>90 U$S</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Tabla