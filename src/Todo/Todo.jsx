import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function ToDo () {
  const [lista, setLista] = useState([]);
  const [id,setId] = useState(1);
  const [produto, setProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                produto: produto, categoria: categoria, preco: preco, 
                id: id 
              }]);
        setId(id + 1);
        setProduto("");
        setCategoria("");
        setPreco("");
        setMostrarMensagem(true);
    };
    const remover = (id) => {
     const listaFiltrada = lista.filter((ativ) => ativ.id !== id);
      setLista(listaFiltrada);
    }

  return (
    <div className="container">
      <h1>Login</h1>
      <h1>Seus dados</h1>
      < form onSubmit={salvar}>
      < div className="input-tamanho">
      <label htmlFor="produto">Nome:</label>
      <input
      id="produto"
      className="border-lista"
      onChange={(e) => setProduto(e.target.value)} 
      type="text"
      value={Nome}
      />
      <label htmlFor="categoria">Nome:</label>
      <input
      id="categoria"
      className="border-lista"
      onChange={(e) => setCategoria(e.target.value)} 
      type="text"
      value={Nome}
      />
      <label htmlFor="preco">Nome:</label>
      <input
      id="preco"
      className="border-lista"
      onChange={(e) => setPreco(e.target.value)} 
      type="text"
      value={Nome}
      />
      <button className="button-red">add</button>
      </div>
      </form>
  
      {mostrarMensagem && (
        <p>Parabéns, voce foi registrado!</p>
      )}

     <div>
      <div className="tamanhos">
        {lista.map((ativ) => (
        <div key={ativ.id}>
          <p>Produto: {ativ.produto}</p>
          <p>Categoria: {ativ.categoria}</p>
          <p>R$: {ativ.preco}</p>
         <button classeName="button-red" onClick={() => remover(ativ.id)}>Remover</button>
      </div>
        ))}                                                                                                                       
     </div>
    </div>
    </div>
  ); 
}