const taskReducer = (state = [], action) => {
    let totalTasks;
    let newTasks;

    switch(action.type) {
        case "addTask" :
            return [...state, action.totalTasks];

        case "deleteTask" :
            const remainingTasks = state.filter((task) => action.task.id !== task.id);
            return [...remainingTasks];

        case "updateTask" :
            newTasks = [...state];
            totalTasks =  newTasks.find((totalTasks) => action.totalTasks.id === totalTasks.id);
            totalTasks.name = action.totalTasks.name;
      return [...newTasks];

        case "completeTask" :
            newTasks = [...state];
        totalTasks = newTasks.find((totalTasks) => action.totalTasks.id === totalTasks.id);
        totalTasks.completed = !action.totalTasks.completed;
      return [...newTasks];
    default:
      return state;
  }
};
export default taskReducer;



