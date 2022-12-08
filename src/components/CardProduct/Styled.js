import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-content: center;
  gap: 1rem;
  width: 100%;
  background-color: #1c1c1c;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-top: 2.5%;
  min-height: 100vh;
`;

export const CardProductContainer = styled.div`
  display: grid;
  background-color: #1c1c1c;
  width: 20.5rem;
  height: 19rem;
  border-radius: 3.125rem;
  box-shadow: 5px 5px 8px black;
  &:hover {
      transform: scale(1.1);
      transition: all .3s ease;
    }
    


  img {
    width: 20.5rem;
    height: 13rem;
    border-top-left-radius: 3.125rem;
    border-top-right-radius: 3.125rem;
  }

  .price-add {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: auto;
    font-size: 20px;
    background: -webkit-linear-gradient(#d3d3d3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: start;
    margin-bottom: auto;
    font-size: 25px;
    background: -webkit-linear-gradient(#d3d3d3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    width: 6.25rem;
    height: 1.25rem;
    box-shadow: 5px 5px 8px black;
    font-size: 15px;
    background: -webkit-linear-gradient(#d3d3d3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }
`;
