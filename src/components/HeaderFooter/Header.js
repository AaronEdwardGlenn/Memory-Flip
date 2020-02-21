import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.main}>
          <h1>VACATION FLIP</h1>
        </header>
      </>
    );
  }
}
