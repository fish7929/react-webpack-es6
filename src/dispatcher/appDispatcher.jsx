// 文件名称: appDispatcher
//
// 创 建 人: fishYu
// 创建日期: 2016-10-28
// 描    述: 全局的事件派发
import * as types from '../constants/actionTypes';

var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/listStore');

var TodoStore = require('../stores/todoStore');

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        //button 抛的事件
        case types.ADD_NEW_ITEM:  //增加新子项
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();  //更新数据，UI
            break;
        //TODO 需要做的事件
        case types.CREATE_TASK:  //新增任务
            TodoStore.createTaskHandler(action.task);
            TodoStore.emitChange();  //更新数据，UI
            break;
        case types.TOGGLE_TASK:   //改变任务的状态
            TodoStore.toggleTaskHandler(action.task);
            TodoStore.emitChange();
            break;
        case types.SAVE_TASK:  //保存编辑任务
            TodoStore.saveTaskHandler(action.oldTask, action.newTask);
            TodoStore.emitChange();
            break;
        case types.DELETE_TASK:  //删除任务
            TodoStore.deleteTaskHandler(action.task);
            TodoStore.emitChange();
            break;
        default:
            break;
    }
 });


module.exports = AppDispatcher;

