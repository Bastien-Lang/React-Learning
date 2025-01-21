function tasks(props){
    console.log(props)
    return  (
        <li key={props.task.id}>{props.task.name}</li>
    )
}

export default tasks