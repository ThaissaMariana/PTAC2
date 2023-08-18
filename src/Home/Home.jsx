import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
    return (
        <div>
          <h1>Home</h1>
          <Link to="/Todo">TO DO LIST</Link>
          <p>{count}</p>
          <p>{name}</p>
          <button onClick={() => { setCount(count + 1) }}></button>
          <button onClick={() => { setCount(0) }}>Reset</button>
          <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
    );
}