export const addTask = (task) => {
    return { 'type': 'addItem', 'task': task}
}



export const deleteTask = (task) => {
    return { 'type': 'deleteItem', 'task': task}
} 



export const updateTask = (task) => {
    return { 'type': 'updateItem', 'task': task}
} 



export const finishTask = (task) => {
    return { 'type': 'finishTask', 'task': task}
} 
