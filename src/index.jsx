import './index.css';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './components/app';

// import { Provider } from 'react-redux';

// import counterStore from './stores/counterStore';

// const store = counterStore();

render(<App /> , document.getElementById("app"));