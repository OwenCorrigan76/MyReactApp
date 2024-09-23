import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Homepage';
import SkillsPage from './pages/SkillsPage';
import CoursesPage from './pages/CoursesPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage /> } />
      <Route path='/skills' element={<SkillsPage /> } />
      {/* <Route path='/add-skill' element={<CoursesPage /> } /> */}
      <Route path='*' element={<NotFoundPage /> } />


  </Route>
));
const App = () => {
  return <RouterProvider router={router} />
};

export default App