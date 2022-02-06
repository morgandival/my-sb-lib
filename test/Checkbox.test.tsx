import React from 'react';
import ReactDOM from 'react-dom';
import { Default as Checkbox } from '../stories/components/Checkbox.stories';

describe('Checkbox', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Checkbox
      children="This is some text"
      name="checkboxID"
      isChecked={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
