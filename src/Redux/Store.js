import { configureStore } from "@reduxjs/toolkit";
import  postSlice  from "./Postslice";
export const store = configureStore({
    reducer:{
       posts: postSlice,
    },
})

