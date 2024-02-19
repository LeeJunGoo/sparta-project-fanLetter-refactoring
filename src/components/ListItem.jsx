import React from "react";
import {
  FooterItem,
  FooterItemContent,
  FooterItemTitle,
  ListDate,
  ListTitle,
} from "style/Styles";
import { FooterItemFigure, FooterItemImage } from "../style/Styles";
import { useNavigate } from "react-router-dom";

function ListItem({ data }) {
  const navigate = useNavigate();

  return (
    <FooterItem
      onClick={() => {
        navigate(`/detail/${data.id}`);
      }}
    >
      <FooterItemFigure>
        <FooterItemImage src={data.avatar}></FooterItemImage>
      </FooterItemFigure>
      <FooterItemTitle>
        <ListTitle>{data.nickname}</ListTitle>
        <ListDate>{data.createdAt}</ListDate>
      </FooterItemTitle>
      <FooterItemContent>{data.content}</FooterItemContent>
    </FooterItem>
  );
}

export default ListItem;
