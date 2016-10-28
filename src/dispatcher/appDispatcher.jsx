import * as types from '../constants/actionTypes';

var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/listStore');

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case types.ADD_NEW_ITEM:
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
            break;
    }
 });


module.exports = AppDispatcher;

