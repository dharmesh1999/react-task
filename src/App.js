import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './components/user-list/UserList';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/user" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
