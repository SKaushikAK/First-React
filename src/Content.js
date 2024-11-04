import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";


const Content = () => {

    // function RandomChange() {
    //     const names = ['kaushik', 'crysis', 'kumar'];
    //     const rand_name = Math.floor(Math.random() * 3);
    //     setName( names[rand_name]);
    // }

    // // const clicked = () => {
    // //     console.log("Normal click");

    // // }

    // // const clicked2 = (name) => {
    // //     console.log(`Command Click ${name}`);
    // // }

    // // const clicked3 = (e) => {
    // //     console.log(e,e.target);
    // // }

    // // function namee(){
    // //     console.log("Hello")
    // // }

    // const [count, setCount] = useState(99);
    // const [name, setName] = useState("Crysis")

    // function addcount(operation){
    //     if (operation === '+') setCount((count) => count + 1); // for increasing the count using setcount multiple times
         
    //     else setCount((count) => count - 1);
    // }
    const [items, setitems] = useState(
        [
            {
                id : 1,
                name : "Day One",
                checked : true
            },
            {
                id: 2,
                name: "Day Two",
                checked: false
            },
            {
                id: 3,
                name: "Day Three",
                checked: false
            }
        ])
        // const numbers = [-2,-1,0,1,2];

    const handleChange  = (id) => {
        console.log(`id = ${id}`);
        const list = items.map((items) => items.id === id ? 
        {...items, checked : !items.checked} 
        : items)

        setitems(list)
    }

    return (

        <main>
            {/* <p>
                Paragraph with {name}
            </p>
            {/* <button onClick={clicked}>Normal Button</button>
            <button onClick={() => clicked2('Crysis')}> Command Name</button> */}
            {/* <button onClick={(e) => clicked3(e)}> event Name</button> */}
            {/* <button onClick = {RandomChange}> Button Name</button>
            <button onClick={() => addcount('+')}>+</button>
            <p>{count}</p>
            <button onClick={() => addcount('-') }>-</button> */} 
            <ul>
                {items.map((items) => (
                    <li className='item' key = {items.id}>
                        <input
                        type = "checkbox"
                        onChange = {() => handleChange(items.id)}
                        checked = {items.checked}
                        />
                        <label>{items.name}</label>
                        <FaTrashAlt 
                        role = 'button'
                        tabIndex = '0'/>
                    </li>
                    
                ))}
            </ul>
        </main>
    )
}

export default Content