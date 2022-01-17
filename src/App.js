import React, {useState} from "react";
import './App.css'

const App = () =>{

  const [counter, setCounter] = useState(0);
  const addcount = () =>{
    setCounter(counter +1);
  }

  const subCount = () =>{
    if(counter > 0){
      setCounter(counter => counter -1)
    }
  }


  return (
      <div className={'main'}>
        <button onClick={addcount}>+</button>
        <h1> {counter}</h1>
        <button onClick={subCount}>-</button>
      </div>
  );
}


export default App