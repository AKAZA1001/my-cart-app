import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        id: 'WSL',
        name: 'WOLF SO GRIM AND MANGY',
        quantity: 0,
        price: 249.0,
      },
      {
        id: 'GRIMG',
        name: 'WOLF SO GRIM AND MANGY',
        quantity: 0,
        price: 249.0,
      },
      {
        id: 'MANGY',
        name: 'WOLF SO GRIM AND MANGY',
        quantity: 0,
        price: 249.0,
      },
    ],
  },
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;