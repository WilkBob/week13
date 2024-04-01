import './App.css';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Waves from './components/Waves';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LoginForm/>
      <Waves/>
    </div>
  );
}

export default App;
