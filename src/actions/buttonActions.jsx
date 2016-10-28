import * as types from '../constants/actionTypes';
var AppDispatcher = require('../dispatcher/appDispatcher');

var ButtonActions = {
    addNewItem: function (text) {
        AppDispatcher.dispatch({
            actionType: types.ADD_NEW_ITEM,
            text: text
        });
    }
};


module.exports = ButtonActions;
