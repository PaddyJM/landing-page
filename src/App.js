import profile from './profile.jpeg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ y: '-200%' }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <motion.button
            className="App-profile-motion"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://github.com/PaddyJM">
              <img src={profile} className="App-profile" alt="logo" />
            </a>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ y: '+300%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <p>Hi 👋 I&apos;m Paddy, nice to meet you!</p>
        </motion.div>
      </header>
    </div>
  );
}

export default App;
