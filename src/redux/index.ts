// Packages
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import rootReducer from '@/redux/reducers';

export default configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production'
});