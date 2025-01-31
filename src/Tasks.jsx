import { useState } from "react";
import styles from "./Tasks.module.css";

function Tasks(props){
    function handleClick(){
        props.task.status=!props.task.status
        props.sortTask(props.task)


    }
    return (
        <li
            key={props.task.id}
            onClick={handleClick}
            className={props.task.status?styles.Clicked:styles.Default}
        >
            {props.task.name}
        </li>
    )
}

export default Tasks