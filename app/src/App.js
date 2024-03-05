import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import MainPage from './Pages/MainPage';

const rollbarConfig = {
  accessToken: 'a00fea07b869482b8ac0f66dac81ab98',
  environment: 'testenv',
};

const App = () => (
  <RollbarProvider config={rollbarConfig}>
    <ErrorBoundary>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </ErrorBoundary>
  </RollbarProvider>
);

export default App;
