import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <Link to="/todo">todo</Link>
            <h1 class="home-nome"><img class ="img" src="https://assets.stickpng.com/images/5eaaad3cad89b60004c4c7c8.png" alt=""></img>Produtos Hello Kitty</h1>
            <img src="https://64.media.tumblr.com/2daa10a683da64c3008f888b41e02402/1552c74e4f9174a7-f9/s1280x1920/e620a7e2d4a29ef4a654e204264ba71c6e2d1c28.gif" alt="" class="imagem-home"/>
            <div class="produto-card"><img class="image" src="https://acdn.mitiendanube.com/stores/001/740/961/products/screenshot_2023-05-09-06-56-41-059-edit_com-instagram-android1-84ed7996f3fcaa052116836478759855-640-0.jpg" alt=""></img>
            <p class="name">Categoria: Decoração</p>
            <p class="nome">Descrição: Funko Pop! Sanrio Hello Kitty Nerd 65 Colecionavel Original</p>
            </div>
            <div class="produto-card"><img class="image" src="https://cdn.awsli.com.br/800x800/84/84034/produto/188446290/funko-pop--hello-kitty-in-noodle-cup-hello-kitty-46-caixa-800-jji0rl0af6.jpg" alt=""></img>
            <p class="name">Categoria: Decoração</p>
            <p class="nome">Descrição: Funko Pop! Sanrio Hello Kitty In Noodle Cup Hello Kitty 46 Colecionavel Original</p>
            </div>
            <div class="produto-card"><img class="image" src="https://cdn.awsli.com.br/2500x2500/84/84034/produto/103171392/hkk3-qn215qhr99.jpg" alt=""></img>
            <p class="name">Categoria: Decoração</p>
            <p class="nome">Descrição: Funko Pop! Sanrio Gold Metal Hello Kitty 36 Exclusivo Flocked Colecionavel</p>
            </div>
            <div class="produto-card"><img class="image" src="https://cdn.awsli.com.br/2500x2500/84/84034/produto/140598404/hkkk3-lqkx7bzmsz.jpg" alt=""></img>
            <p class="name">Categoria: Decoração</p>
            <p class="nome">Descrição: Funko Pop! Sanrio Team USA Gymnast Hello Kitty 38 Exclusivo Colecionavel </p>
            </div>
        </div>

    );
}