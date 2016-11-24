import React from 'react';
import ToDos from './todo/todos';
import MyButtonController from './myButton/myButtonController';


import Counter from './counter/counter';
//通过redux来实现
import { Provider } from 'react-redux';

import counterStore from '../stores/counterStore';

const store = counterStore();

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ToDos />
                <MyButtonController/>
                <Provider store={store}>
                    <Counter />
                </Provider>
            </div>
        );
    }
}



