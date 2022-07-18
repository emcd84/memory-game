import React, { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import styles from './styles/App.module.css';

function App() {
  const [ score, setScore ] = useState(0);
  const [ highScore, setHighScore ] = useState(0);

  useEffect(() => {
    if(score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  const incrementScore = () => {
    setScore(score + 1);
    if(score > highScore) {
      setHighScore(score);
    }
  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <div className={styles.app}>
      <div id={styles.top}>
        <div id={styles.headerContainer}>
          <h1 id={styles.headerText}>Toronto Blue Jays Memory Game</h1>
          <h2 id={styles.subheaderText}>Click on as many players as possible without clicking on any player twice!</h2>
        </div>
        <div id={styles.scoreboard}>
          <h1 className={styles.scoreboardText}>Score: {score}</h1>
          <h1 className={styles.scoreboardText}>High Score: {highScore}</h1>
        </div>
      </div>
      <CardContainer incrementScore={incrementScore} resetScore={resetScore}/>
    </div>
  );
}

export default App;
