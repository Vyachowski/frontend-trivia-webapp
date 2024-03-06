import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import GamePage from './Pages/GamePage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
