import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import App from '../../client/containers/App';

describe('Single component', () => {
  describe('buttons', () => {
    function getButtons(e) {
      if (e.type === 'button') {
        return e;
      }
    }

    it('should be 2', () => {
      let renderer = TestUtils.createRenderer();
      renderer.render(<App />);
      let buttons = renderer.getRenderOutput().props.children.filter(getButtons);
      expect(Array.isArray(buttons)).toBe(true);
      expect(buttons.length).toEqual(2);
    });

    it.skip('should update the value when up button is clicked', () => {
      let renderer = TestUtils.createRenderer();
      let props = {
        increase: expect.createSpy(),
	decrease: expect.createSpy()
      };
      renderer.render(<App {...props} />);
      let buttons = renderer.getRenderOutput().props.children.filter(getButtons);
      buttons[0].props.increase();
    });

  });
});
