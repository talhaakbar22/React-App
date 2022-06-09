import React from "react";
import { Array } from "./Array";
import { FaTimes } from 'react-icons/fa';

const Task = () => {
    return(
        <div className="task">
            {Array.map((obj)=>(
                <h3>
                    {obj.id} <FaTimes style={{}}/>
                </h3>
            ))}
        </div>
    )
}
export default Task;