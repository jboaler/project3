import React from 'react'

export default function toDoList() {
    const [addName, setName] = useState("");

    const [editing, trapEdits] = useState(false);
    

    function changeHandler(e) {
        setName(e.target.value);
    }

    function submitHandler(e) {
        props.editTask(props.id,addName);
        setName("");
        trapEdits(false);
    }



    const template = (
        <form onSubmit={submitHandler}>
            <label htmlfor={props.id}></label>

            <input id={props.id} value={name} onChange={changeHandler} />

            <div>
                <button onClick={() => trapEdits(false)}>
                    Cancel task
                </button>
            </div>
        </form>
        
    );

    

    const viewTemplate = (
    <div>
        <input id={props.id}> type="checkbox" checked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}
        </input>
    );
    
    <label htmlFor={props.id}>{props.name}
    </label>
      <div>
        <button onClick={() => trapEdits(true)}>
          Edit task 
          <span>{props.name}</span>
          </button>


        <button onClick={() => props.deleteTask(props.id)}>
          Delete 
          <span>{props.name}</span>
        </button>
      </div>
    </div>
  );

    return (
        <div>
            <li>
                {editing ? template : viewTemplate};
            </li>
        </div>
    )
}
