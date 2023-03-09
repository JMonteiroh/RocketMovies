import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { New } from '../pages/new';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/New" element={<New />} />
    </Routes>
  );
}