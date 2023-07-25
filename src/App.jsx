import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import Index from './pages/Information';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/information" element={<Index />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
