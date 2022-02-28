import React, { useRef } from "react";
import { useState } from "react";
import "./App.css"

function App() {
  
  const arr = [
    {
      id : Math.random(),
      title : "1",
      isComplited : false,
    },
    {
      id : Math.random(),
      title : "2",
      isComplited : false,
    },
    {
      id : Math.random(),
      title : "3",
      isComplited : false,
    },
  ]
  const [item , setItemm] = useState(arr);
  const getIpt = useRef();
  const getBalance = useRef();
  const addItem = () =>
  {
    const newArr = [{
      id: Math.random(),
      title : getIpt.current.value,
      balance : getBalance.current.value,
      isComplited :false,
    } , ...item ];
    setItemm(newArr)
  }

  return (
    <div className="App"> 
     <ul>
       {
          item.map(todo =>(
            <div className = "element" key = {todo.id}>
              {todo.title} 
              <div className="plus">
                {todo.balance}
              </div>
              
            </div>
            
          ))
      }
     </ul>
      <button onClick={addItem}>добавить</button>
      <input placeholder="введите значение" ref = {getIpt}/>
      <input placeholder="введите сумму" ref = {getBalance}/>
    </div>
  );
}

export default App;
