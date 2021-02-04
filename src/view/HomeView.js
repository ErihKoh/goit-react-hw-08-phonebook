import React from 'react';
import { Route } from 'react-router-dom';
import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const style = {
  bounceInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown'),
  },
};

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  text: {
    fontWeight: 500,
    fontSize: 20,
  },
};

const HomeView = () => (
  <StyleRoot>
    <div style={style.bounceInDown}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome
          <span role="img" aria-label="Иконка приветствия">
            💁‍♀️
          </span>
        </h1>
        <p style={styles.text}>Log in to get a list of contacts</p>
      </div>
    </div>
  </StyleRoot>
);

export default HomeView;
