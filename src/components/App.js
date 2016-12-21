import React from 'react';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: 'white' };
  }

  onFormSubmit = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;
    const { characters } = this.props;

    return <div id="container">
      <div id="form-container">
        <Form onSubmit={this.onFormSubmit} />
      </div>
      <div id="characters-container">
        <CharacterList characters={characters} color={color} />
      </div>
    </div>;
  }
}

export default App;
