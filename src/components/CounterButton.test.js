import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import renderer from 'react-test-renderer';

it('expect card component to render', () => {
    const mockColor = 'red';
    
    const tree = renderer.create(
        <CounterButton color={mockColor} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
})

it('Test click event', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const instance = wrapper.instance();
    expect(wrapper.state('count')).toBe(0);
    instance.updateCount();
    expect(wrapper.state('count')).toBe(1);
    expect(wrapper.props().color).toEqual('red')
});