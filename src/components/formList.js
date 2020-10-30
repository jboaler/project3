import React, {useState} from 'react'

export default function formList(props) {
    const [name, addName] = useState("");


    //???
    function changeHandler(e) {
        addName(e.target.value);
    }



    //??
    function submitHandler(e) {
        e.preventDefault();
        props.addTask(name);
        addName("");
    }
    

    
    return (
        <form onSubmit={submitHandler}>
            <h3>
                Task List
            </h3>
            <input type="text" value={name} onChange={changeHandler}>
                Enter task
            </input>

            <button type="submit">
                Add task
            </button>

            <button type="submit">
                Reset
            </button>    
        </form>
    )
}
