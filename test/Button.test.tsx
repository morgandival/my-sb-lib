import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Button } from '../stories/components/Button.stories';

describe('Button', () => {
  it('renders a button', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
