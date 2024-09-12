// src/features/counter/counterSlice.js
import { UserType } from "@/Components/util/type";
import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null as UserType | null,
        token: Cookie.get('auth-token'),
    },
    reducers: {

        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;
const userReducer = userSlice.reducer
export default userReducer;