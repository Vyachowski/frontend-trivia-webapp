import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import MainPage from './Pages/MainPage'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
