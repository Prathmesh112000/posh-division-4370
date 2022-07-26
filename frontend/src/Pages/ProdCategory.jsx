import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryDiv = styled.div`
  // display: flex;
  // justify-content: space-around;
  // display: inline-flex;
  // border-radius: 6px;
  text-align: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #dfe3e6;
  margin: 7.5px 15px 7.5px 0;
  background: #fff;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .product_name {
      color: #e6363a;
    }
  }
`;
const StyledImg = styled.img`
  width: 60%;
`;
const StyledH2 = styled.p`
  font-size: 15px;
  color: #1f4985;
  text-align: left;
`;
const StyledH3 = styled.h3`
  font-size: 15px;
  color: #3a5f94;
  // color: #1f4985;
  // 1f4985
  text-align: left;
`;
const Styledp = styled.p`
  // color: #666666;
  // text-align: right;
  // font-weight: bold;
  font-size: 15px;
  text-decoration: line-through;
`;
const StyledP = styled.p`
  color: #5d9d5c;
  font-size: 14px;
  text-align: right;
  font-weight: bold;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;
const Styleddown = styled.div`
  display: "flex";
  border: "1px solid black";
  gap: "5px";
  color: "#3a5f94";
  &:hover {
    color: #1f4985;
  }
`;

export const ProdCategory = ({ item }) => {
  // const navigate = useNavigate();
  return (
    <Link to={`/product/${item._id}`}>
      <CategoryDiv>
        <StyledImg src={item.img} alt={item.name}></StyledImg>
        <StyledH2 className="product_name">{item.name}</StyledH2>
        <StyledDiv>
          <StyledH3>{item.price}</StyledH3>
          <Styledp>{item.mrp}</Styledp>
          <StyledP>{item.save}</StyledP>
        </StyledDiv>
        <div style={{ display: "flex", gap: "8px" }}>
          <p
            style={{
              border: "1px solid #388636",
              color: "#388636",
              backgroundColor: "#effcf5",
              fontSize: "10px",
              borderRadius: "10px",
              padding: "4px",
            }}
          >
            OFFERS AVAILABLE
          </p>
          <p
            style={{
              border: "1px solid #388636",
              color: "#388636",
              backgroundColor: "#effcf5",
              fontSize: "10px",
              borderRadius: "10px",
              padding: "4px",
            }}
          >
            LIMITED TIME OFFER
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              // border: "1px solid",
              gap: "5px",
              color: "#3a5f94",
              // justifyContent: "center",
            }}
          >
            <input type="checkbox" name="" id="" />
            <p>Compare</p>
          </div>
          <div
            style={{
              display: "flex",
              // border: "1px solid black",
              gap: "5px",
              color: "#3a5f94",
              // justifyContent: "center",
            }}
          >
            <FontAwesomeIcon style={{ marginTop: "16px" }} icon={faHeart} />
            <p>Wishlist</p>
          </div>
        </div>
      </CategoryDiv>
    </Link>
  );
};
