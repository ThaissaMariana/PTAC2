import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.css';

export default function ToDo () {

  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id,setId] = useState(1);
  const [produto, setProduto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [imagem, setImagem] = useState("");

  useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                produto: produto, categoria: categoria, imagem: imagem, 
                id: id 
              }]);
        setId(id + 1);
        setProduto("");
        setCategoria("");
        setPreco("");
        setMostrarMensagem(true);
        setImagem("");
    };
    const remover = (id) => {
     const listaFiltrada = lista.filter((ativ) => ativ.id !== id);
      setLista(listaFiltrada);
    }

  return (
    <div class="container">
    <Link to="/">home</Link>
    <h1 class="nome">Produtos Hello Kitty</h1>
    <form onSubmit={salvar}>
  
  <p class="nome">Produto:</p>
      <input value={produto} type="text"
      onChange={(e) =>{ setProduto(e.target.value)}}/>

  <p class="nome">Categoria do produto:</p>
      <input value={categoria} type="text"
      onChange={(e) =>{ setCategoria(e.target.value)}}/>

   <p class="nome">Imagem:</p>
      <input value={imagem} type="text"
      onChange={(e) =>{ setImagem(e.target.value)}}/>
      
      <button className="button-red">Adicionar</button>
    </form>
        {lista.map((ativ) => (
        <div class="produto-card" key={ativ.id}>
          <img src={ativ.imagem} alt="" class="imagem" />
          <p class="nome">Produto: {ativ.produto}</p>
          <p class="nome">Categoria: {ativ.categoria}</p>
         <button class="button-red" onClick={() => remover(ativ.id)}>Remover</button>
      </div>
      
        ))}  
        </div>                                                                                                                     
  ); 

}