import './App.css';
import { Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import List from './Pages/List';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </div>
  );
}

export default App;
