import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from '../components/common/NotFound/NotFound';
import Content from '../components/layouts/Content/Content';

import { fetchTasksDataAsync } from '../store/slices/taskSlice';

import './App.css';


function App() {
  const dispatch = useDispatch();
  const isDarkThemeActive = useSelector(state => state.isDarkTheme.isDarkThemeActive);

  useEffect(() => {
    dispatch(fetchTasksDataAsync());
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkThemeActive ? '#333333' : '#fff';
    document.body.style.color = isDarkThemeActive ? '#fff' : '#000000';
  }, [isDarkThemeActive]);

  return (
    <div className='wrapper'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />  
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
