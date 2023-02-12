import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'Desserts',
  Dessertdata:[],
  WrapsData:[],
  BurgersData:[],
  DrinksData:[],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state,action) => {
      state.value = action.payload;
    },
    setCategoryData : (state,action) => {
        state.Dessertdata.push(action.payload)
    },
    setWrapsData: (state,action) => {
        state.WrapsData.push(action.payload)
    },
    setBurgersData: (state,action) => {
        state.BurgersData.push(action.payload)
    },
    setDrinkData: (state,action) => {
        state.DrinksData.push(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCategory,setCategoryData,setWrapsData,setBurgersData,setDrinkData } = categorySlice.actions;

export default categorySlice.reducer;