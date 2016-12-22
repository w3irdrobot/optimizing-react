import React from 'react';
import styles from './styles.css';

class Character extends React.PureComponent {
  onClick = () => {
    const { character, onClick } = this.props;

    onClick(character.name);
  }

  render() {
    const { character, backgroundColor } = this.props;

    return <div
      className={styles.character}
      style={{ backgroundColor }}
      onClick={this.onClick}>
      <p>{character.name}</p>
    </div>;
  }
}

export default Character;
