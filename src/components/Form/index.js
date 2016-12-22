import React from 'react';
import styles from './styles.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  updateColor = e => {
    const color = e.target.value;

    this.setState({ color });
  }

  onSubmit = e => {
    e.preventDefault();

    const { color } = this.state;
    const { onSubmit } = this.props;

    if (color) {
      onSubmit(color);
      this.setState({ color: '' });
    }
  }

  render() {
    const { color } = this.state;

    return <form onSubmit={this.onSubmit} className={styles.form}>
      <label htmlFor="color">Color:</label>&nbsp;
      <input type="text" id="color" value={color} onInput={this.updateColor} />&nbsp;
      <button type="submit">Change Color</button>
    </form>;
  }
}

export default Form;
