import React from 'react';

const Todoform = (props) =>{
    var disabled=true;
    if(props.currentTask.trim()){
        disabled=false
    }
    return (
        <form onSubmit={props.addTask}>Task 
            <input
                id="input" 
                type="text"  
                value={props.currentTask}
                onChange={props.updateTask}

            />
            <br/>
            <button id="add_button" type="submit"  disabled={disabled}>Add</button>
        </form>
    )
}

export default Todoform;