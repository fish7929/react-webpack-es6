import * as types from '../constants/actionTypes';
var AppDispatcher = require('../dispatcher/appDispatcher');

var TodoActions = {
    createTask: function (task) {
        AppDispatcher.dispatch({
            actionType: types.CREATE_TASK,
            task: task
        });
    },
    toggleTask: function (task) {
        AppDispatcher.dispatch({
            actionType: types.TOGGLE_TASK,
            task: task
        });
    },
    saveTask: function (oldTask, newTask) {
        AppDispatcher.dispatch({
            actionType: types.SAVE_TASK,
            oldTask: oldTask,
            newTask: newTask
        });
    },
    deleteTask: function (task) {
        AppDispatcher.dispatch({
            actionType: types.DELETE_TASK,
            task: task
        });
    }
};


module.exports = TodoActions;
