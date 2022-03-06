import './App.css';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';
import { Title } from './components/Title';
import { Skills } from './components/Skills';
function App() {
  
  return (
    <div className="App">
      <div className='container'>
        <Profile />
        <div className='content'>
          <Menu/>
          <Title/>
       
        </div>
      </div>
    </div>
  );
}

export default App;
