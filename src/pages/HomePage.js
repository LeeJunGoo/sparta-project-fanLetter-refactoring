import { HomeBackground } from "style/Styles";
import Form from "components/Form";
import Header from "components/Header";
import List from "components/List";
import React from "react";

// 컴포넌트라는 각각의 모듈(기능)을 하나의 페이지에 담아 사용한다.
function HomePage() {
  return (
    <HomeBackground>
      <Header></Header>
      <Form></Form>
      <List></List>
    </HomeBackground>
  );
}

export default HomePage;
