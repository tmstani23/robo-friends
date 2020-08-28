import React from 'react';

const SearchBox = ({searchChange}) => {

    return (
        <div className='pa2'>
            <input 
                aria-label='Search Robots'
                onChange = {searchChange}
                className ='pa3 ba b--green bg-lightest-blue'
                type ='search' 
                placeholder ='search robots'
            />
        </div>
        
    )
}

export default SearchBox;