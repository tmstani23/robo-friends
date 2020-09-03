import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import renderer from 'react-test-renderer';

let wrapper;
//jest method that runs before each test
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('expect app component to render pending false', () => {
    
    const tree = renderer.create(
        wrapper
      ).toJSON();
      expect(tree).toMatchSnapshot();
})

it('expect app component to render div when pending true', () => {
    const mockPropsPending = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true
    }
    let wrapperPending = shallow(<MainPage {...mockPropsPending} />)
    const treePending = renderer.create(
        wrapperPending
      ).toJSON();
      expect(treePending);
      expect(treePending.children[0].type).toEqual("div")
})

it('filters the robots correctly2', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name:'Johnny',
            email:'Johnny@gmail.com'
        }],
        searchField: 'Johnny',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual(mockProps2.robots);
})

it('searchbox and filter working', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name:'Johnny',
            email:'Johnny@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage {...mockProps3} />)
    const filteredRobots = [];

    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})