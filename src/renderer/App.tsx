import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import icon from '../../assets/icon.svg';
import './App.css';

import BarList from './bar/Barlist';
import MainCanvas from './mainCanvas/MainCanvas';

import Code from './code/Code';

const Hello = () => {
  const methodDoesNotExist = () => {
    console.log('888');
  };

  return (
    <div>
      <MainCanvas />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </Router>
  );
}
