import { configureStore } from "@reduxjs/toolkit";
import sliceData from './Slice.jsx';

const Store = configureStore({
    reducer: {
        StoreData: sliceData
    }
});

export default Store;
