import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/HomePage";
import Detail from "pages/DetailPage";
import Profile from "pages/ProfilePage";
import Login from "pages/LoginPage";
import Layout from "components/Layout";
import { useSelector } from "react-redux";

const Router = () => {
  const { isLogin } = useSelector((state) => state.authSlice);

  console.log(isLogin);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/detail/:id" element={<Detail />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
