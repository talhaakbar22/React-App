import React from "react";

const Button =({text,color})=>{
    return <button style={{backgroundColor:color}} className="btn">{text}</button>
}
export default Button;