import Tasks from "./Tasks.jsx";
import styles from "./TodoList.module.css";
import {useState} from "react";
import Form from "./Form.jsx";
import {myTask, addTask} from "./Data/data.js";

function TodoList(){
    let [task, setTask] = useState(myTask)
    console.log(task)
    function handleAddTask(taskName){
        let newTask = addTask(taskName)
        setTask([...task, newTask])
    }
    return(
        <>
            <div className='Data'>
                <h1>My Tasks</h1>
                <h2 className='title'>I love these tasks</h2>
                <ul className={styles.ul}>
                    {task.map((task) => (<Tasks task={task}/>))}
                </ul>
            </div>
        <Form addTask={handleAddTask}/>
        </>
    )
}

export default TodoList