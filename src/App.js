import logo from './logo.svg';
import Navbar from './navbar'
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Home from './WebPages/Home'

function App() {
  return (
   <Router>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/poems"></Route>
    </Routes>
      













   
    </Router>

  );
}

export default App;
