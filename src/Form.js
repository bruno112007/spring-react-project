function Form({botao}){
    return (
        <form className="form-main">
            <input type="text" placeholder="Nome" className="inputs"></input>
            <input type="text" placeholder="Marca" className="inputs"></input>   

            {
                botao?
                <button className="buttons" id="cadastrar">Cadastrar</button>
                :
                <div>
                    <button className="buttons" id="alterar">Alterar</button>
                    <button className="buttons" id="deletar">Deletar</button>
                    <button className="buttons" id="cancelar">Cancelar</button>
                </div>
            }
        </form>
    )
}

export default Form;