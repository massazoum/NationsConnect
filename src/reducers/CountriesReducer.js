import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const RegionAfricaAPI = createAsyncThunk('Africa', async () => {
  const res = await fetch('https://restcountries.com/v3.1/region/africa');
  const response = await res.json();
  return response;
});

const RegionSlice = createSlice({
  name: 'region',
  initialState: {
    Africaregion: [],
    targetdetails: null,
    isOpen: false,
  },
  reducers: {
    openDetail: (state) => ({
      ...state,
      isOpen: true,
    }),
    findDetail: (state, action) => ({
      ...state,
      targetdetails: action.payload,
    }),
    closeDetail: (state) => ({
      ...state,
      isOpen: false,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegionAfricaAPI.fulfilled, (state, action) => ({
        ...state,
        Africaregion: action.payload,
      }));
  },
});

export const { openDetail, closeDetail, findDetail } = RegionSlice.actions;

export default RegionSlice.reducer;
