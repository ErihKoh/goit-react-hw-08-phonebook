import React from 'react';
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <StyleRoot>
    <div style={style.bounceInDown}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Приветственная страница нашего сервиса{' '}
          <span role="img" aria-label="Иконка приветствия">
            💁‍♀️
          </span>
        </h1>
      </div>
    </div>
  </StyleRoot>
);

export default HomeView;
