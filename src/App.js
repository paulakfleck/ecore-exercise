import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './components/Welcome/Welcome';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/Teams/TeamDetails';
import Users from './components/Users';

function App() {
  return (
    <React.Fragment>
      <MainHeader />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:team" element={<TeamDetails />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
