let myTask = [
    {
        id: 1,
        name: 'Learn React',
    },
    {
        id: 2,
        name: 'Learn Vite',
    },
    {
        id: 3,
        name: 'Learn CSS',
    }
]

function addTask(task){
    let newid = myTask[myTask.length - 1].id + 1
    let newTask = {
        id: newid,
        name: task
    }
    return newTask
}

export {myTask, addTask}