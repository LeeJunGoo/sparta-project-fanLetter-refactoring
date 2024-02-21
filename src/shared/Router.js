import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/HomePage";
import Detail from "pages/DetailPage";
import Profile from "pages/ProfilePage";
import Login from "pages/LoginPage";
import Layout from "components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home/" element={<Home />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
