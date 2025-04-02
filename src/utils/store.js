import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./appSlice";
import ChatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        app: AppReducer,
        chat: ChatSlice
    }
})

export default store;