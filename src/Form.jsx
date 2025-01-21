import {useState} from "react";

function Form({addTask}) {
    let [name, setName] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        addTask(name)
        alert(name)
    }
    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} placeholder="Add a task" />
        <button type="submit">Submit</button>
        </form>
    );
}

export default Form