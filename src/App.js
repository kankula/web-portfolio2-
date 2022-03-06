import './App.css';
import { useState } from "react";
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { Title } from './components/Title';
import { Skills } from './components/Skills';
import { Elucational } from './components/Elucational';
function App() {
  const [state, setState] = useState(1);
  const getState = setState
  
  const clickProf = () => {
    document.getElementById("profileS").classList.toggle("show")
  }
  return (
    <div className="App">
      <div className='container'>
      <i className="fas fa-user-circle" onClick={clickProf}></i>
        <Profile clickProf={clickProf} />
        <div className='content'>
          <Menu  getState={getState}/>
          <div>
            <Title state={state} />
            <Skills state={state} />
            <Elucational state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
