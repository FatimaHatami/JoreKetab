import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicBooks from './Pages/publicBooks/PublicBooks';
import ForeignBooks from './Pages/foreignBooks/ForeignBooks';
import SchoolBooks from './Pages/schoolBooks/SchoolBooks';
import ChildrenBooks from './Pages/childrenBooks/ChildrenBooks';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/PublicBooks' element={<PublicBooks/>}></Route>
      <Route path='/SchoolBooks' element={<SchoolBooks/>}></Route>
      <Route path='/ForeignBooks' element={<ForeignBooks/>}></Route>
      <Route path='/ChildrenBooks' element={<ChildrenBooks/>}></Route>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
