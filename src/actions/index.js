import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchFieldAction = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobotsAction = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.length > 0 ?
            dispatch({
                type: REQUEST_ROBOTS_SUCCESS,
                payload: data
            })
            : dispatch({
                type: REQUEST_ROBOTS_FAILED,
                payload: [{error: 'Robots request failed'}]
            })
        })
        .catch(error => console.log(error))
        
}