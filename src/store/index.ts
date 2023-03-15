import { demoReducer } from "@/pages/Demo/store";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const clientStore = configureStore({
    reducer: { demo: demoReducer.reducer },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(thunk),

})

const serverStore = configureStore({
    reducer: { demo: demoReducer.reducer },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(thunk)
})

export { clientStore, serverStore }