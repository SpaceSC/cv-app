import React, {useState} from 'react';
import TextDisplay from './components/TextDisplay/TextDisplay.component.jsx';
/*
import TextArea from './components/TextArea/TextArea.component.jsx';
*/
import ResetButton from './components/ResetButton/ResetButton.component.jsx';
import './App.css';
import LeftFields from './components/LeftFields/LeftFields.component.jsx';

function App () {


  const [displayText, setDisplayText] = useState("");

  return (
    <div className="App">
      <ResetButton reset={() => setDisplayText("")}/>
      <div className="container">
        <LeftFields />
        <TextDisplay display={displayText}/>
      </div>
    </div>
  );
}

export default App;

/* TextArea component
<TextArea display={displayText} changeText={(event) => setDisplayText(event.target.value)}/>
*/
