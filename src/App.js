import Button from "./components/Button/Button";
import TimeCounter from "./components/TimeCounter/TimeCounter";


const App = () => {
  return (
    <section>
       <TimeCounter />
       <Button>Start</Button>
       <Button>Stop</Button>
       <Button>Reset</Button>
    </section>
   
  );
};

export default App;