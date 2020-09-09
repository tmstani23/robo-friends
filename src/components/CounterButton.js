import React, {PureComponent} from 'react';

//Pure components only update when their props change
class CounterButton extends PureComponent {
    
    state = {
        count: 0
    }
    // only necessary if not a pure component and you want to restrict rerenders.  Gives more directed control and allows updated based on specific props changes
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.count !== nextState.count) {
    //         return true;
    //     }
    //     return false;
        
    // }

    updateCount = () => {
        //Here state is passed with a callback function to avoid side effects caused by async state update
        //Useful when modifying current state
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return (
            <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>    
        )
    }
}

export default CounterButton;