import React from 'react' 

export default function filter(props) {
    return (
        <div>
            <button onClick={() => props.setFilter(props.name)} >
                <div>
                    Show all tasks
                    {props.name}
                </div> 
            </button>   
        </div>
    )
}

// div for props needed?


