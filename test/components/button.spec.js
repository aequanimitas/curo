import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Button from '../../client/components/Button';

describe('Button component', () => {
  it('unary prop', () => {
    let renderer = TestUtils.createRenderer();
    let props = {
      unary: expect.createSpy()
    }
    renderer.render(<Button {...props} />);
    let button = renderer.getRenderOutput()
    button.props.onClick();
    expect(props.unary.calls.length).toBe(1)
  });
});
