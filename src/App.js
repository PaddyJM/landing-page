import profile from './profile.jpeg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div initial={{ y: "-200%" }} animate={{ y: 0 }} exit={{ y: -100 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <motion.button className="App-profile-motion" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img src={profile} className="App-profile" alt="logo" />
          </motion.button>
        </motion.div>
        <p>
          Hi 👋 I'm Paddy, nice to meet you!
        </p>
      </header>
    </div>
  );
}

export default App;
