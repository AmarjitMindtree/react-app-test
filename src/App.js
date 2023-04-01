import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails';
import DateComponent from './DateComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<UserDetails/>} />
          <Route path='/date-component' element={<DateComponent/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
