import logo from './logo.svg';
import Navbar from './navbar'
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Home from './WebPages/Home'
import Poems from './WebPages/Poems'
import PoemReq from './WebPages/PoemReq'
import Pictures from './WebPages/Pictures'

function App() {
  return (
   <Router>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/poems" element={<Poems />}></Route>
      <Route path="/poems/:id" element={<PoemReq />}></Route>
      <Route path="/photos" element={<Pictures />}></Route>
    </Routes>
      













   
    </Router>

  );
}

export default App;
