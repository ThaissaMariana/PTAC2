import { useState } from "react";
import { Link } from "react-router-dom";
import '../style.css';

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
    <div>
    <Link to="/">home</Link>
    <h1 class="nome">Produtos Hello Kitty</h1>
    <form onSubmit={salvar}>
  
  <p class="nome">Produto:</p>
      <input value={produto} type="text"
      onChange={(e) =>{ setProduto(e.target.value)}}/>

  <p class="nome">Categoria do produto:</p>
      <input value={categoria} type="text"
      onChange={(e) =>{ setCategoria(e.target.value)}}/>

   <p class="nome">Preço do produto:</p>
      <input value={preco} type="text"
      onChange={(e) =>{ setPreco(e.target.value)}}/>
      
      <button>ADD</button>
    </form>
        {lista.map((ativ) => (
        <div key={ativ.id}>
          <p class="nome">Produto: {ativ.produto}</p>
          <p class="nome">Categoria: {ativ.categoria}</p>
          <p class="nome">R$: {ativ.preco}</p>
         <button className="button-red" onClick={() => remover(ativ.id)}>Remover</button>
      </div>
      
        ))}  
        </div>                                                                                                                     
  ); 

}