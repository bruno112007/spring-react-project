function Table({vector}){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vector.map((obj, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{obj.name}</td>
                            <td>{obj.brand}</td>
                            <td>{obj.price}</td>
                            <td><button className="buttons">Selecionar</button></td>
                        </tr>
                    )) 
                }
            </tbody>
        </table>
    )
}

export default Table;