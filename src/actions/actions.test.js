import * as actions from './index';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';


const mockStore = configureMockStore([thunkMiddleware]);


it('should create an action to search robots', () => {
    const text = 'Awesomest text ever';
    const expectedAction= {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

    expect(actions.setSearchFieldAction(text)).toEqual(expectedAction)
})

it('should successfully request robots API pending state', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobotsAction());
    const action = store.getActions();

    const expectedAction= {
        type: REQUEST_ROBOTS_PENDING,
    }

    expect(action[0]).toEqual(expectedAction)
})
