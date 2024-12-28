import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
return (
<BrowserRouter>
<Routes>
      {/* <Route path="/" element={<Landing/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
