import React from 'react';


export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do ?" ref="createInput" />
                <button>Create</button>
           </form>     
        );
    }

    handleCreate(event) {
        event.preventDefault();
        var task = this.refs.createInput.value;
        if (task){
            this.props.createTask(task);
            this.refs.createInput.value = '';
        }
        
    }
}

