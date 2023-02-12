// import { configureStore } from "@reduxjs/toolkit";
// import categoriesSlice from "./Categories/categoriesSlice";

// export const store =  configureStore({
//     reducer: {
//         categories : categoriesSlice
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./Categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});