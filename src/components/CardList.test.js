import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';
import renderer from 'react-test-renderer';

it('expect card component to render', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'John',
            email: 'john@gmail.com'
        }
    ]
    const tree = renderer.create(
        <CardList robots={mockRobots} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
})

it('test alternative return condition', () => {
    const mockRobots = []
    
    const tree = renderer.create(
        <CardList robots={mockRobots} />
      ).toJSON();
    
    expect(tree.children[0].children[0]).toBe(" Loading...")
    
    
});