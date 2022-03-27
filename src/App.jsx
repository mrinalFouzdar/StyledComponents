
import './App.css';
import React from 'react';
import { Button } from './Components/Button';

function App() {
  const [count,setCount]=React.useState(0)
  const [theme,setTheme]=React.useState("dark")



  return (
    <div >
      <h1>{count}</h1>
      <br />
      <Button theme={theme} onClick={()=>setCount(count+1)}>INC</Button>
      <Button theme={theme} onClick={()=>setCount(count-1)}>DEC</Button>
      <Button theme={"blue"}>3rd Btn</Button>
      <Button theme={"doted_border"}>4th</Button>

      <br />
      <br />
      <br />
      <button onClick={()=>setTheme(theme === 'dark' ? "Light" : "dark")}>TOGGLE THEME</button>
    </div>
  );
}

export default App;
