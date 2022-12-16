import './App.css';
import Play from './Components/Play';
import React, {useState} from 'react';



function App() {
  const [mode, setMode] = useState('Light');
  const [color, setColor] = useState({
    color:"grey"
  });
  const toggle = ()=> {
    if(mode === 'Light') {
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      setMode('Dark');
      setColor('grey')
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setMode('Light');
      setColor('white');
    }
  }
  return (
    <div>
      <div className="form-check form-switch float-end mx-3 my-3 px-4 py-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggle}
          style={{
            boxShadow: "none",
            backgroundColor: "orangered",
            color: "white",
          }}
        />
        <label htmlFor="flexSwitchCheckDefault"/>
        <b>{mode} Mode</b>
      </div>
      <Play color={color} />
    </div>
  );
}

export default App;
