import * as types from '../constants/actionTypes'
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function () {
        return this.items;
    },

    addNewItemHandler: function (text) {
        this.items.push(text);  
    },

    emitChange: function () {
        this.emit(types.CHANGE);
    },

    addChangeListener: function (callback) {
        this.on(types.CHANGE, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(types.CHANGE, callback);
    }

});

module.exports = ListStore;

