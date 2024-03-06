import profile from './profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-profile" alt="logo" />
        <p>
          Hi 👋 I'm Paddy, nice to meet you!
        </p>
      </header>
    </div>
  );
}

export default App;
