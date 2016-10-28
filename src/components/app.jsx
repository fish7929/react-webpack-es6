import React from 'react';
import ToDos from './todo/todos';
import MyButtonController from './myButton/myButtonController';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ToDos />
                <MyButtonController/>
            </div>
        );
    }
}

