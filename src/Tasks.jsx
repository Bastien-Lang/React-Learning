function tasks(props){
    let clicked = false
    function handleClick(e){
        if (!clicked) {
            e.target.style.textDecoration = 'line-through'
            e.target.style.backgroundColor = "green"
            clicked = true
            let index = props.task.id             
        }
    }
    return  (
        <li key={props.task.id} onClick={handleClick}>{props.task.name}</li>
    )
}

export default tasks