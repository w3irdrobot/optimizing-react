import React from 'react';
import Form from './Form';
import CharacterList from './CharacterList';
import PerfProfiler from './PerfProfiler';

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
      <PerfProfiler />
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
