import { Exemplo } from './Exemplo'

export default function App() {
const listaAlunos = [{nome: "Thaissa", idade: 16, cidade: "Batayporã"} , {nome: "Mirella", idade: 16, cidade: "Batayporã"}, {nome:"Rebeca", idade: 15, cidade: "Batayporã"}, {nome:"Mika", idade:16, cidade: "Nova Andradina"}];
    return ( 
        <div>
            <h1>Hello Word!</h1>
            <Exemplo lista={listaAlunos} />
        </div>
    );
}
