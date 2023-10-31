import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import NoteState from './context/notes/NoteState';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import Blogs from './components/Blogs';
import News from './components/News';
import Jobs from './components/Jobs';
import StripePayment from './components/StripePayment';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Pension from './components/Pension';
import Blog from "./components/Blog"

function App() {
  return (
    <div  >
      <NoteState>
        <Router>
          <Navbar />
          {/* <Alert message="This is amazing"/> */}
          <div className=''>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/blogs" element={<Blogs />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/pension" element={<Pension />} />
              <Route exact path="/donations" element={<StripePayment />} />
              <Route exact path="/success" element={<Success />} />
              <Route exact path="/cancel" element={<Cancel />} />
              <Route exact path="/jobs" element={<Jobs />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/blog" element={<Blog />} />
              {/* Admin Routes */}
              <Route exact path="/admin" element={<Home role="admin" />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;