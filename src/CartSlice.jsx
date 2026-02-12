import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost } = action.payload; //destructer product details from the action payload
        //check if the item is in the cart by comparing names
        const existingItem = state.items.find(item => item.name === name);
        if(existingItem) {
            //if it exists, increase
            existingItem.quantity++
        } else {
            //if it does not exist, add it to cart with quantity 1
            state.items.push({ name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; //destructure the data 
        //find item in cart that matches the name
        const itemToUpdate = state.items.find(item => item.name === name);
        //if it exists update the quantity to new quantity.
        if(itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
