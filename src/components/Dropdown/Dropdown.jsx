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
    const { visible } = this.state;
    return (
      <div className={css.dropdown}>
        <button
          type="button"
          className={css.dropdownToggle}
          onClick={this.toggle}
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>
        {visible && <div className={css.dropdownMenu}> Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
