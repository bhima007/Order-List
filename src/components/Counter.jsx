import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handlePlus = () => {
        this.setState(plus => ({
            count: plus.count + 1
        }));
    }

    handleMinus = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePlus}>Plus</button>
                <button onClick={this.handleMinus}>Minus</button>
                <input type="text" disabled placeholder={this.state.count} />
            </div>
        );
    }
}

export default Counter;