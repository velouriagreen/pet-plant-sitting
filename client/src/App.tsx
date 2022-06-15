import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MapMain from './Pages/MapMain';
import CalendarMain from './Pages/CalendarMain';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobsMain from './Pages/JobsMain';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const App: FC<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/map' element={<MapMain />} />
        <Route path='/calendar' element={<CalendarMain />} />
        <Route path='/jobs' element={<JobsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
