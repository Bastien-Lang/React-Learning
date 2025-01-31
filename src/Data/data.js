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

let cpt = myTask.length +1

function addTask(name){
    let task = {
        id: cpt ++,
        name: name
    }
    return task;
}
export {myTask, addTask}