import Tasks from "./Tasks.jsx";
import styles from "./TodoList.module.css";

function TodoList(props){
    return(
        <div className='Data'>
            <h1>My Tasks</h1>
            <h2 className='title'>I love these tasks</h2>
            <ul className={styles.ul}>
                {props.task.map((task) => (<Tasks task={task}/>))}
            </ul>
        </div>
    )
}

export default TodoList