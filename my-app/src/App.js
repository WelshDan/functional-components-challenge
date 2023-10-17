import css from './App.module.css';
import StatefulGreeing from './components/StatefulGreeting';
import StatefulGreeingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      <StatefulGreeingWithCallback greeting="I'm a stateful class component" name="Dave" />
    </div>
  );
}

export default App;