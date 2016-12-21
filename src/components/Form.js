import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  updateColor = e => {
    this.setState({
      color: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const { color } = this.state;
    const { onSubmit } = this.props;

    onSubmit(color);
    this.setState({ color: '' });
  }

  render() {
    const { color } = this.state;

    return <form onSubmit={this.onSubmit}>
      <label htmlFor="color">Color</label>&nbsp;
      <input type="text" id="color" value={color} onInput={this.updateColor} />
      <button type="submit">Change Color</button>
    </form>;
  }
}

export default Form;
