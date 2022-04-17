import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
      <Router>
        <div className="min-w-screen min-h-screen  ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
