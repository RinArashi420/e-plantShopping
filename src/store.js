import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
//Create a redux store using configureStore
 const store = configureStore({
    //defines root reducer object
    reducer: {
        //cart is the name of the slice, and is managed by cartReducer
        cart: cartReducer,
    },
});
//exports the store obviously
export default store
