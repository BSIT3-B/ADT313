import logo from './logo.svg';
import './App.css';
import User from './component/User/User';
import Name from './component/User/Name';
import Section from './component/User/Section';
import Description from './component/User/Description';

function App() {
  return (
    <div className="App">
     <Name />
     <Section />
     <Description />
    </div>
  );
}

export default App;
