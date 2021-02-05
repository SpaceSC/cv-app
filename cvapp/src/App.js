import React, {useState} from 'react';
import TextDisplay from './components/TextDisplay/TextDisplay.component.jsx';
import TextArea from './components/TextArea/TextArea.component.jsx';
import ResetButton from './components/ResetButton/ResetButton.component.jsx';
import './App.css';

function App() {

  const [displayText, setDisplayText] = useState("");

  return (
    <div className="App">
      <ResetButton reset={() => setDisplayText("")}/>
      <div class="container">
        <TextArea display={displayText} changeText={(event) => setDisplayText(event.target.value)}/>
        <TextDisplay display={displayText}/>
      </div>
    </div>
  );
}

export default App;
