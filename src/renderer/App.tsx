import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import icon from '../../assets/icon.svg';
import './App.css';

import BarList from './bar/Barlist';
import MainCanvas from './mainCanvas/MainCanvas';

const Hello = () => {
  const methodDoesNotExist = () => {
    console.log('888');
  };

  return (
    <div>
      <MainCanvas />
      {/* <BarList children={<MainCanvas />} /> */}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
