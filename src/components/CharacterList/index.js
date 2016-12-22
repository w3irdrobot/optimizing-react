import React from 'react';
import Character from '../Character';
import styles from './styles.css';

class CharacterList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters.slice(0)
    };
  }

  removeCharacter = characterName => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter(c => c.name !== characterName)
    });
  }

  render() {
    const { characters } = this.state;
    const { color } = this.props;

    return <div className={styles.characterList}>
      {characters.map((c, i) =>
        <Character
          key={c.name}
          character={c}
          backgroundColor={i % 3 === 0 ? color : 'white'}
          onClick={this.removeCharacter} />
      )}
    </div>
  }
}

export default CharacterList;
