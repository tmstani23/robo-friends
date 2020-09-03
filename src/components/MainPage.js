import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import Header from '../components/Header';
//import '../styles/fonts/App.css';



class MainPage extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = () => {
        //Filter the robots to only include those in the searchfield
        return this.props.robots.filter(robot => {   
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }

    render() {
        
        //searchField and searchChange now coming from redux store as props
        const {onSearchChange, isPending} = this.props;
        
        
            

        return (
            <div className='tc'>
                <Header />
                
                <Scroll>
                    { isPending ? <h1>Loading...</h1>
                        : <ErrorBoundary>
                            <SearchBox searchChange={onSearchChange}/>
                            <CardList robots={this.filterRobots()}/> 
                        </ErrorBoundary>
                    }
                </Scroll>
                
            </div>
        )  
    }
    
}

export default MainPage;