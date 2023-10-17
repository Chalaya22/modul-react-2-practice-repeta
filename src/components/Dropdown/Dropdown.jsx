import React, { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className={css.dropdown}>
        <button
          type="button"
          className={css.dropdownToggle}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {this.state.visible && (
          <div className={css.dropdownMenu}> Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
