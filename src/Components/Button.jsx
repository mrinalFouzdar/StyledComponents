// import React from 'react'
import styled from "styled-components"

const Button = styled.button`
border: ${({theme})=>(theme ==="Light" ? "1px solid black" : theme ==="doted_border" ? "1px dotted black" : "1px solid black")};
background-color: transparent ;

cursor: pointer;
margin-left: 5px;
margin-right: 5px;
padding: 10px;
background-color: ${({theme})=>(theme ==="dark" ? "black" : theme === "blue" ? "blue" :"white")};
color:${({theme})=>(theme ==="dark" ? "aliceblue" :  theme === "blue" ? "white" :"black")} ;

&:hover{
    background-color: ${({theme})=>(theme ==="dark" ? "aliceblue" : "black")} ;
    color: ${({theme})=>(theme ==="dark" ? "black" : "white")};
    border: 1px solid black;
    transition: background-color 1s, color 1s;
}
`;
// function Button({children,onClick}) {
//   return (
//     <>
//         <button onClick={onClick}>{children}</button>
//     </>
//   )
// }

export  {Button}