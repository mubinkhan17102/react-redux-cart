import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
    </ Provider>
  );
}

export default App;
