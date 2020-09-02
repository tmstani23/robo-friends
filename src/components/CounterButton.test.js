import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import renderer from 'react-test-renderer';

it('expect card component to render', () => {
    const tree = renderer.create(
        <CounterButton />
      ).toJSON();
      expect(tree).toMatchSnapshot();
})

it('Test click event', () => {
    const wrapper = shallow(<CounterButton />);
    const instance = wrapper.instance();
    expect(wrapper.state('count')).toBe(0);
    instance.updateCount();
    expect(wrapper.state('count')).toBe(1);
});