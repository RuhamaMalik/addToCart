import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Home from './screens/Home';
import Cart from './screens/Cart';
function App() {
  return (
    <div className="App" >


      <Routes>
        <Route path='/' element={<MyNavbar />} >
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
