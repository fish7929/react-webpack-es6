var React = require('react');
var MyButton = require('./myButton');
var ListStore = require('../../stores/listStore');
var ButtonActions = require('../../actions/buttonActions');

export default class MyButtonController extends React.Component{
    constructor(props) {
        super(props);

        this.state = { items: ListStore.getAll() };
    }

    componentDidMount() {
        ListStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState({items: ListStore.getAll()});
    }

    createNewItem(event) {
        ButtonActions.addNewItem('new item');
    }

    render() {
        return (
            <MyButton
                items={this.state.items}
                onClick={this.createNewItem}
                />
        );
    }
};





