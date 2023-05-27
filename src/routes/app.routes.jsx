import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Profile } from '../pages/Profile';
import { Preview } from '../pages/Preview';
import { Edit } from '../pages/Edit';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  );
}