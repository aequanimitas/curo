import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import App from '../../client/containers/App';

describe('Single component', () => {

  it('should contain 2 buttons', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    let output = renderer.getRenderOutput();
    expect(Array.isArray(output.props.children.length)).toBe(true);
  });
});
