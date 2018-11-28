import React, { Component } from 'react';
import Todocompleted from './Todocompleted';


class Todoitems extends Component{
    constructor(props){
        super(props);

        this.state ={
            editing:false,
        }
    this.form = this.form.bind(this);
    this.item = this.item.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);

    }
    updateItem(eve){
        eve.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState();

    }

    toggleState(){
        const {editing }= this.state
        this.setState({
            editing : !editing
        })
    }

    item(){
        return( 
        <div id="right"  
            onClick={ () =>{
                this.props.clickHandler(this.props.index);
            }}
            className={this.props.details.completed ? "completed" : ""}>
                {this.props.details.name}
        <button id="del_button"
            className="edit" 
            onClick={ (eve) => {
                    eve.stopPropagation();
                    this.props.deleteTask(this.props.index)
            }} > X 
        </button>
        <button id="edit_button"
            className="edit" 
            onClick={ (eve) => {
                    eve.stopPropagation();
                    this.toggleState()
            }} > edit
        </button>
        
        </div>)
    }

    form = () => {
        return(
            <form onSubmit={this.updateItem}>
                <input type="text" 
                        ref={(value) =>{
                            this.input = value
                            }} 
                        defaultValue={this.props.details.name} />
                <button id="update_button" type="submit"  > update </button>
            </form>)
    }



    render(){
        const { editing } = this.state;
    return (
        <section>
            <div>
                {
                    editing ? this.form() : ( this.props.details.completed ? null : this.item() )
                }
            </div>
            

        </section>

    )
    }
}
export default Todoitems;