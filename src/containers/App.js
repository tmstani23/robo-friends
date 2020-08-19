import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// action imports
import {setSearchFieldAction, requestRobotsAction} from '../actions';
//Redux imports
import {connect} from 'react-redux';
//import { requestRobotsReducer } from '../reducers';

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

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        
        //searchField and searchChange now coming from redux store as props
        const {searchField, onSearchChange, robots, isPending} = this.props;
        
        //Filter the robots to only include those in the searchfield
        let filteredRobots = robots.filter(robot => {   
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
            

        return !isPending ? (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>)
            : null
            
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);