import { useState } from "react";
import Button from "./components/Button/Button";
import TimeCounter from "./components/TimeCounter/TimeCounter";
import styles from './App.module.scss'

const App = () => {
  const [time, setTime]= useState(0);
  const [timer, setTimer] = useState();

  const startStoper = () =>{
    setTimer(setInterval(() =>
    { setTime(prevValue => prevValue + 10);}))
  };

  const stopStoper = () =>{
    clearInterval(timer);}

  const resetStoper = () => {
    stopStoper();
    setTime(0);
    }

  return (
    <div className={styles.container}>
      <TimeCounter time={time}/>
      <Button action={startStoper}>START</Button>
      <Button action={stopStoper}>STOP</Button>
      <Button action={resetStoper}>RESET</Button>
    </div>
  );
  }

export default App;