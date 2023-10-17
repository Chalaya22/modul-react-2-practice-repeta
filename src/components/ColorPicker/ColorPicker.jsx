import React, { Component } from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 4,
  };
  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };
  render() {
    const { options } = this.props; //диструктуризируем ссылку на масив

    const { lable } = options[this.state.activeOptionIndex];
    return (
      <div className={css.colorPicker}>
        <h1 className={css.colorPickerTitle}>Color Picker</h1>
        <p>Выбран цвет: {lable}</p>;
        <div className={css.section}>
          {options.map(({ lable, color }, index) => {
            return (
              <button
                type="button"
                key={lable}
                className={css.colorPickerOption}
                style={{
                  backgroundColor: color,
                  border:
                    index === this.state.activeOptionIndex
                      ? ' 3px solid  black  '
                      : 'none',
                }}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
