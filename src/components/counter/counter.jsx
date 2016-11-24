import React, {PropTypes} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../actions/counterActions';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //从组件props 属性中导入4个方法和一个变量
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <button onClick={incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={() => incrementAsync()}>Increment async</button>
            </p>
        );
    }
}
//限制组件的props安全
Counter.propTypes = {
    //限制为function，并且必须存在
    increment : PropTypes.func.isRequired,
    incrementIfOdd : PropTypes.func.isRequired,
    incrementAsync : PropTypes.func.isRequired,
    decrement : PropTypes.func.isRequired,
    //限制为数字，并且必须存在
    counter : PropTypes.number.isRequired
}


//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch){
    return bindActionCreators(CounterActions, dispatch);
}
//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
