import Card from './Card'
import React from 'react';


const CardList = ({robots, error}) => {

    return (
        <div>
            {
                !robots.length > 0 &&! error
                    ? <h1 className = 'tc'> Loading...</h1>
                    : 
                        <div>
                            {   
                                robots.map((robot, i) => {
                                    
                                    return (
                                        <Card 
                                            key = {i} 
                                            id={robot.id} 
                                            name={robot.name} 
                                            email={robot.email} 
                                        />
                                    )
                        
                                })
                            
                            } 
                                
                        </div>
            }
            {
                error !== undefined ? <h2 style={{color: 'red'}}>{error[0].error}</h2> : null
            }
        </div>
        
        
    )
    
}

export default CardList;