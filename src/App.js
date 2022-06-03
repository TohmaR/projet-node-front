import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddMeuble from './components/addMeuble';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/add" element={ <AddMeuble /> } />
          <Route path="/listing" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
