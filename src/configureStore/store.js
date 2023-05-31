import { configureStore } from '@reduxjs/toolkit';
import RegionReducer from '../reducers/CountriesReducer';

const store = configureStore({
  reducer: {
    region: RegionReducer,
  },
});

export default store;
