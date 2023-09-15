import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Todo () {
  const [lista, setLista] = useState([]);
  const [id,setId] = useState(1);
  const [produto, setProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [exibirMensagem, setExibirMensagem] = useState(false);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                produto: produto, categoria: categoria, preco: preco, id: id }]);
        setId(id + 1);
        setProduto("");
        setCategoria("");
        setPreco("");
        setExibirMensagem(true);
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
      < div className="input-container">
      <label htmlFor="produto">Nome:</label>
      <input
      id="produto"
      className="pink-border-input"
      onChange={(e) => setProduto(e.target.value)} 
      type="text"
      value={Nome}
      />
      <label htmlFor="categoria">Nome:</label>
      <input
      id="categoria"
      className="pink-border-input"
      onChange={(e) => setCategoria(e.target.value)} 
      type="text"
      value={Nome}
      />
      <label htmlFor="preco">Nome:</label>
      <input
      id="preco"
      className="pink-border-input"
      onChange={(e) => setPreco(e.target.value)} 
      type="text"
      value={Nome}
      />
      <button className="pink-border-button">add</button>
      </div>
      </form>
  
      {exibirMensagem && (
        <p className="mensagem-cor-de-rosa">Parabéns, voce foi registrado!</p>
      )}

     <div>
      <div className="value-area">
        {lista.map((ativ) => (
        <div key={ativ.id}>
          <p>Produto: {ativ.produto}</p>
          <p>Categoria: {ativ.categoria}</p>
          <p>Preco: {ativ.preco}</p>
         <button classeName="pink-border-button" onClick={() => remover(ativ.id)}>Remover</button>
      </div>
        ))}
     </div>
    </div>
    </div>
  ); 
}