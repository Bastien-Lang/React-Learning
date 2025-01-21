function tasks(props){
    let clicked = false
    function handleClick(e){
        if (clicked) {
            e.target.style.textDecoration = 'none'
            e.target.style.backgroundColor = "red"
            clicked = false
        }
        else {
            e.target.style.textDecoration = 'line-through'
            e.target.style.backgroundColor = "green"
            clicked = true
        }
    }
    return  (
        <li key={props.task.id} onClick={handleClick}>{props.task.name}</li>
    )
}

export default tasks