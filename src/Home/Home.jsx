import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <h1 class="home-nome">Produtos Hello Kitty</h1>
            <img src="https://64.media.tumblr.com/2daa10a683da64c3008f888b41e02402/1552c74e4f9174a7-f9/s1280x1920/e620a7e2d4a29ef4a654e204264ba71c6e2d1c28.gif" alt="" class="imagem-home"/>
            <Link to="/todo">todo</Link>
        </div>

    );
}