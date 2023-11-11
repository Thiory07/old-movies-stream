
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header.js';
import Timeline from './components/Timeline/Timeline.js';

import './i18n'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Timeline></Timeline>
    </div>
  );
}

export default App;

