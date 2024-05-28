import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  amount: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      if (!state.products.some((product) => product.title === payload.title))
        state.products.push(payload);
    },
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.title === payload.title);
      item.amount++;
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((item) => item.title === payload.title);
      if (item.amount !== 1) item.amount--;
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.title !== payload.title
      );
    },
    updateTotal: (state) => {
      state.total = 0;
      state.products.map((product) => {
        state.total += parseFloat(product.price) * parseFloat(product.amount);
      });
    },
  },
});

export const {
  addToBasket,
  increaseAmount,
  decreaseAmount,
  removeItem,
  updateTotal,
} = basketSlice.actions;

export default basketSlice.reducer;
