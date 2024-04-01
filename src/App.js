import './App.css';
import { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Waves from './components/Waves';
function App() {
  useEffect(() => {
    const body = document.body;

    const handleMouseMove = (event) => {
      const clientX = event.clientX;
      const hue = Math.round((clientX / window.innerWidth) * 120) + 200;
      body.style.backgroundColor = `hsl(${hue}, 20%, 50%)`;
    };

    body.addEventListener('mousemove', handleMouseMove);

    return () => {
      body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <LoginForm/>
      <Waves/>
    </div>
  );
}

export default App;
