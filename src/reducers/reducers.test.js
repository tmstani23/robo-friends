import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from "../actions/constants";

 import * as reducers from './index';

 //tests for search robots reducers
 describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    } 
    
    it('should return the initial state', () => {
         expect(reducers.searchRobotsReducer(undefined, {})).toEqual(initialStateSearch)
     })

    it('should handle the CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobotsReducer(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({searchField: 'abc'})
    })
 })

 //tests for request robots reducers
 describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    } 
    
    it('should return the initial state', () => {
         expect(reducers.requestRobotsReducer(undefined, {})).toEqual(initialStateRobots)
     })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({
            robots: [],
            isPending: true
        })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '12',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '12',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobotsReducer(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Error failed request'
        })).toEqual({
            error: 'Error failed request',
            robots: [],
            isPending: false 
        })
    })
 })