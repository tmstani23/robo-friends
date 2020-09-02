import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

it('expect card component to render', () => {
    const tree = renderer.create(
        <Card />
      ).toJSON();
      expect(tree).toMatchSnapshot();
})
