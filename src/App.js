import React, { Component } from 'react';
import './App.css';
import Todoitem from "./Todoitem.js"
import Todoform from "./Todoform.js"
import Todocompleted from "./Todocompleted"


class App extends Component {
  constructor(){
    super();
     this.changeStatus = this.changeStatus.bind(this);
     this.updateTask = this.updateTask.bind(this);
     this.addTask = this.addTask.bind(this);
     this.deleteTask = this.deleteTask.bind(this);
     this.editTask = this.editTask.bind(this);

    this.state = {
      tasks: [{
        name: "task",
        completed: false ,
      },
      {
        name: "task1",
        completed:false,
      },
    ],
    currentTask:"",

    }
  }
  editTask(index ,newValue){
    var tasks = this.state.tasks;
    var task = tasks[index];
    if(newValue.length){
    task['name'] = newValue;
    this.setState({
      tasks
    })}
  }

  deleteTask = (index) => {
    let tasks = this.state.tasks;
    tasks.splice(index,1);
    this.setState({
      tasks
    })
  }

  addTask =(eve) => {
    eve.preventDefault();
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
      name:currentTask,
      completed:false,
    })
    this.setState({
      tasks,
      currentTask:"" 
    })
  }  

  updateTask = (newValue) => {
    this.setState({
      currentTask: newValue.target.value
    })
  }

  changeStatus = (index) => {
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    this.setState({
      tasks:tasks
    })
    console.log(this.state.tasks)
  };

  render() {
    return (
      <div className="App " id="form" >
        <section >
          <h1 className="vert-offset-top-0" >Todo list</h1>
        <div className="todoBox col-xs-6 col-xs-offset-3">
        <div id="table" align="center">
        <div >
          {
            this.state.tasks.map((task,index) => {
              return <Todoitem 
                        key={index} 
                        deleteTask = {this.deleteTask}
                        editTask = {this.editTask}
                        currentTask = {this.state.currentTask}
                        index={index}  
                        clickHandler={this.changeStatus} 
                        details={task} />
            })
          }

        </div>
        </div>
        </div>
        <Todoform 
            
            currentTask = {this.state.currentTask}
            updateTask =  {this.updateTask}
            addTask = {this.addTask}
          />
        </section>
        <hr />
        <section>  
          {
            this.state.tasks.length>0 ? 
                                          <div>
                                            <h2>Completed Task</h2>
                                          {
                                            this.state.tasks.map((task,index) => {
                                              return <Todocompleted 
                                                        key = {index}
                                                        index={index}  
                                                        clickHandler={this.changeStatus} 
                                                        details={task}  />
                                            })
                                          }
                                          </div> : <p>heyyyy enter some tasks</p>
          }
          
        </section>
      </div>
    );
    
  }
}



export default App;
