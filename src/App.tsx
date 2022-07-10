import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/pages/home/HomePage';
import { SettingsPage } from './components/pages/settings/SettingsPage';
import { TestsPage } from './components/pages/tests/TestsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/tests' element={<TestsPage/>} />
      <Route path='/settings' element={<SettingsPage/>} />
    </Routes>
  );
}

export default App;
