import Tasks from "./Tasks.jsx";
import styles from "./TodoList.module.css";
import Form from "./Form.jsx";
import { useState } from "react";
import { addTask } from "./Data/data.js";

function TodoList(props){
    const [task, setTask] = useState(props.task);
    function handleAddTask(name){
        let newTask = addTask(name);
        setTask([...task, newTask]);
    }

    function handleSortTask(currentTask){
        let sortedTask = task.filter((task) => task !== currentTask);
        sortedTask.push(currentTask)
        setTask([...sortedTask]);
    }

    return(
        <div className='Data'>
            <h1>My Tasks</h1>
            <h2 className='title'>I love these tasks</h2>
            <ul className={styles.ul}>
                {task.map((task) => (<Tasks task={task} sortTask={handleSortTask}/>))}
            </ul>
            <Form setTask={handleAddTask}/>
        </div>
    )
}

export default TodoList