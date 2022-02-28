
import React, { useEffect, useRef, useState } from 'react'
import "./Form.css"


export default function Form() {
    
    
    const getBalance = useRef();
    const getInput = useRef();
    const start = 0;

    const [item , setItemm] = useState([]);

    const [balance , setBalance] = useState(start)
    const [procent , setProcent] = useState(0)
    

    const tobalik = () =>
    {

        const newBalance = Number(balance) + Number(getBalance.current.value)
        const getProcent = newBalance / 3000 * 100
        
        setBalance(newBalance)
        setProcent(getProcent.toFixed(0) ) 
        
        const newArr = [{
            balance : getBalance.current.value,
            title : getInput.current.value,
            id : new Date(),
        } , ...item ];
        setItemm(newArr)
        
    }
    
    if (balance == null || procent == null)
    {
        setBalance(localStorage.setItem('balance' , 0));
        setProcent(localStorage.setItem('procent', 0));
        window.location.reload();
    }
    useEffect(() => {
        setBalance(localStorage.getItem('balance'));
    }, []);
    useEffect(() => {
        setProcent(localStorage.getItem('procent'));
    }, []);
    useEffect(() => {
        setItemm( JSON.parse (localStorage.getItem('object')));
    }, []);
    

    useEffect(() => {
        localStorage.setItem('balance', balance);
    }, [balance]);
    useEffect(() => {
        localStorage.setItem('procent', procent);
    }, [procent]);
    useEffect(() => {
        localStorage.setItem ("object", JSON.stringify(item));
    }, [item]);
    
    const styles = { width: `${procent}%` };
    
    if(procent > 100){
        setProcent(100)
    }
  return (
    <>
        <div className='form'>
            <h1 className='form__title'>Накопление на проектор</h1>
            <span className='input__value'>{balance + "р " + "( " + procent + "% )"}</span>
            <progress value= {balance} max = "4000"></progress>
            <div className="progress-bg"><div className="progress-bar" style={styles}></div></div>
            <div className='input__area'>
                <input placeholder='Введите название' className='form__input' ref = {getInput}/>
                <input placeholder='Введите Сумму' type = "number" ref = {getBalance} className='form__input' />
                <div className='button__area'><button className='form__button' onClick={tobalik}>Закинуть</button></div>
            </div>
        </div>
        <div className='history__balance'>
            <ul>
            {
                item.map(todo =>(
                    <div className = "element" key = {todo.id}>
                    {todo.title} 
                    <div className="plus">
                        {"+ " + todo.balance}
                    </div>
                    
                    </div> 
                ))
            }
            </ul>
        </div>
    </>
  )
}
