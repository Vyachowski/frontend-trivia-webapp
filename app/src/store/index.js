import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authReducer';
import appReducer from './slices/appReducer';
import uiReducer from './slices/uiReducer';

export default configureStore({
  reducers: {
    ui: uiReducer,
    app: appReducer,
    auth: authReducer,
  }
});
