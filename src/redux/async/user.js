import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const headers = {
  Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
};

// 유저 정보
export const getUser = createAsyncThunk(
  "user/getUser",
  async (data, thunkAPI) => {
      
    return ;
  }
);

// 회원 가입
export const signUp = createAsyncThunk(
  "user/signUp",
  async (data, thunkAPI) => {

    return ;
  }
);

// 로그인
export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {

  return ;
});
