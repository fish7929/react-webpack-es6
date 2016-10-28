import * as types from '../constants/actionTypes';
import _ from 'lodash';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var TodoStore = assign({}, EventEmitter.prototype, {
    todos: [
        {
            task: 'make React tutorial',
            isCompleted : false
        },
        {
            task: 'eat dinner',
            isCompleted : true
        }
    ],

    getData: function () {
        return this.todos;
    },

    createTaskHandler: function (task) {
        const foundToDo = _.find(this.todos, todo => todo.task === task);       
        if (!foundToDo){
            var obj = { task, isCompleted: false }
            this.todos.push(obj); 
        } else {
            return;
        }
    },

    toggleTaskHandler: function (task) {
        const foundToDo = _.find(this.todos, todo => todo.task === task);
        foundToDo.isCompleted = !foundToDo.isCompleted;
    },

    saveTaskHandler: function (oldTask, newTask) {
        const foundToDo = _.find(this.todos, todo => todo.task === oldTask);
        foundToDo.task = newTask;
    },

    deleteTaskHandler: function (task) {
        _.remove(this.todos, todo => todo.task === task);
    },

    emitChange: function () {
        this.emit(types.CHANGE_TASK);
    },

    addChangeListener: function (callback) {
        this.on(types.CHANGE_TASK, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(types.CHANGE_TASK, callback);
    }

});

module.exports = TodoStore;

