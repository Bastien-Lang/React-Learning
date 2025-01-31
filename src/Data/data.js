let myTask = [
    {
        id: 1,
        name: 'Learn React',
        status: false
    },
    {
        id: 2,
        name: 'Learn Vite',
        status: false
    },
    {
        id: 3,
        name: 'Learn CSS',
        status: false
    }
]

let cpt = myTask.length +1

function addTask(name){
    let task = {
        id: cpt ++,
        name: name
    }
    return task;
}


export {myTask, addTask}