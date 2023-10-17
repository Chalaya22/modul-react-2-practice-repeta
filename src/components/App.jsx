import React from 'react';
import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import TodoList from './TodoList';

import colorPickerOptions from '../data/colorPickerOptions.json';
// const colorPickerOptions = [
//   { lable: 'red', color: '#F44336' },
//   { lable: 'green', color: '#4CAF50' },
//   { lable: 'blue', color: '#2196F3' },
//   { lable: 'grey', color: '#607D68' },
//   { lable: 'pink', color: '#E91E63' },
//   { lable: 'indigo', color: '#3F51B5' },
// ];

export const App = () => {
  return (
    <div>
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
