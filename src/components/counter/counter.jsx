import React from 'react';
import _ from 'lodash';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
var TodoStore = require('../../stores/todoStore');
var TodoActions = require('../../actions/todoActions');

export default class ToDos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:TodoStore.getData()
        };
    }
    render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <CreateTodo createTask={this.createTask.bind(this)}    />
                <TodosList todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)} />
            </div>
        );
    }

    createTask(task) {
        TodoActions.createTask(task);
    }

    toggleTask(task) {
        TodoActions.toggleTask(task);
    }

    saveTask(oldTask, newTask) {
        TodoActions.saveTask(oldTask, newTask);
    }

    deleteTask(task) {
        TodoActions.deleteTask(task);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange.bind(this));
    }
    _onChange() {
        this.setState({todos: TodoStore.getData()});
    }
}

