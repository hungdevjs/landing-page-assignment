import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MainRoutes;
