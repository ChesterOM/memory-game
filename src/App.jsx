import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Game from './components/Game';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }, [score, bestScore])

  const handleReset = () => {
    setScore(0)
  }








  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <Game setScore={setScore} handleReset={handleReset}/>
    </div>
  )
}

export default App
