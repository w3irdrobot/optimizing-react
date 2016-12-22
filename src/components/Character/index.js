import React from 'react';
import styles from './styles.css';

class Character extends React.Component {
  render() {
    const { character, style } = this.props;

    return <div className={styles.character} style={style}>
      <p>{character.name}</p>
    </div>;
  }
}

export default Character;
