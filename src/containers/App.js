import React from 'react';
import MainPage from '../components/MainPage'

// action imports
import {setSearchFieldAction, requestRobotsAction} from '../actions';
// //Redux imports
import {connect} from 'react-redux';

const mapStateToProps = state => {
    //listen for state changes and send it down as props
    return {
        searchField: state.searchRobotsReducer.searchField,
        robots: state.requestRobotsReducer.robots,
        isPending: state.requestRobotsReducer.isPending,
        error: state.requestRobotsReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    //listen for which props are actions that need to be dispatched to reducer
    return {
        onSearchChange: (event) => dispatch(setSearchFieldAction(event.target.value)),
        onRequestRobots: () => dispatch(requestRobotsAction())
    }
}

class App extends React.Component {

    render() {
        return (
            <MainPage {...this.props} />
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);