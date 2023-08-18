import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value:0},
  reducers: {
    up: (state, action) => {
      console.log('(counterSlice) action : ', action);
      // state.value += action.step;
      // toolkit 변경시 action에 전달 되는 데이터는 payload 값으로 넘어온 값을 읽음
      state.value += action.payload;
    }
  }
});

export default counterSlice;
export const { up } = counterSlice.actions;