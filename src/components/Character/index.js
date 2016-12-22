import React from 'react';
import styles from './styles.css';

class Character extends React.Component {
  render() {
    const { character, style, onClick } = this.props;

    return <div
      className={styles.character}
      style={style}
      onClick={onClick}>
      <p>{character.name}</p>
    </div>;
  }
}

export default Character;
