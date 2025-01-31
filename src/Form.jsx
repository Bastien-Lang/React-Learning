import React, { useState } from 'react';
import { addTask } from './Data/data';


export function Form({setTask}){
    const [value, setValue] = useState('');
    function handleChange(e){
        setValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        setValue('');
        setTask(value);
    }

    console.log(value);
    return(
        <form onSubmit={handleSubmit} >
            <input type="text" value={value} onChange={handleChange}/>
            <input type="submit" value="OK"/>
        </form>
    )
}

export default Form;