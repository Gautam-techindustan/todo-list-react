import React, { Component } from 'react';

class Todocompleted extends Component {
    render() { 
        return ( 
            
            <div>
                {
                    this.props.details.completed ? <div>{this.props.details.name}</div> : null
                }
            </div>
         );
    }
}
 
export default Todocompleted;