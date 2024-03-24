import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';
import uiReducer from './slices/uiSlice';

export default configureStore({
  reducers: {
    ui: uiReducer,
    app: appReducer,
    auth: authReducer,
  },
});
