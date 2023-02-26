function Form({botao, eventKeyboard, createProduct, obj, cancel, deleteProduct, update}){
    return (
        <form className="form-main">
            <input type="text" value={obj.name} onChange={eventKeyboard} name="name" placeholder="Nome" className="inputs"></input>
            <input type="text" value={obj.brand} onChange={eventKeyboard} name="brand" placeholder="Marca" className="inputs"></input>   
            <input type="text" value={obj.price} onChange={eventKeyboard} name="price" placeholder="0" className="inputs"></input>

            {
                botao?
                <input type="button" className="buttons" id="cadastrar" onClick={createProduct} value="Cadastrar"></input>
                :
                <div>
                    <button className="buttons" id="alterar" onClick={update}>Alterar</button>
                    <button className="buttons" id="deletar" onClick={deleteProduct}>Deletar</button>
                    <button className="buttons" id="cancelar" onClick={cancel}>Cancelar</button>
                </div>
            }
        </form>
    )
}

export default Form;