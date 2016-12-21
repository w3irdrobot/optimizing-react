import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.characters,
      color: 'white'
    };
  }

  onSubmit = color => {
    this.setState({
      color
    });
  }

  render() {
    return <div id="container">
      <div id="form-container">
        <Form onSubmit={this.onSubmit} />
      </div>
    </div>;
  }
}

export default App;
