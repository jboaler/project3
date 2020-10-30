import React from 'react'
import filter from './filter';
import form from './formList';
import toDoList from './toDoList';
import { useDispatch, useSelector } from 'react-redux';

const filterMap = {
    allTasks: () => true,

    activeTasks: () => !task.completed,

    finishedTasks: ()=> task.completed

};

const filterNames = Object.keys(filterMap);

export default function home(props) {
    const dispatch= useDispatch()

    const tasks = useSelector(state => state.tasks)

    tasks.forEach( (task, index)=>{
        console.log(index + ": " + JSON.stringify(task))
        
    })


// Add, delete, edit tasks
    const [filter, setFilter] = useState("All");
  function addingTask(name) {
    const newTask = { 'id': "todo-" + nanoid(), 'name': name, 'completed': false };
    console.log('newTask='+newTask)
    console.log('newTask='+JSON.stringify(newTask))
    dispatch(addTask(newTask))
  }

  function deletingTask(id) {
    const task = tasks.find((task) => id === task.id);
    dispatch(deleteTask(task))
  }

  function editingTask(id, newName) {
    const task = tasks.find((task) => id === task.id);
    task.name = newName;
    dispatch(updateTask(task))
  }

function toggleTaskCompleted(id) {
    const task = tasks.find((task) => id === task.id);
    dispatch(completeTask(task))
}

const taskList = tasks
    .filter(filterMap[filter])
    .map((task) => (
      <todoList
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deletingTask}
        editTask={editingTask}
      />
    ));



    const taskSet = taskList.length !== 1 ? "tasks" : "task";


    const filterList = filterNames.map((name) => (
        <filter
          key={name}
          name={name}
          isPressed={name === filter}
          setFilter={setFilter}
        />
      ));
    
    return (
        <div>
            <formList addTask={addingTask}>
                <div>
                    {filterList}
                </div>
                <ul>
                    {taskList}
                </ul>
            </formList>
        </div>
    );
    }

export default function Home
