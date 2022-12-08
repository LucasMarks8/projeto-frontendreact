import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: auto;
  align-items: center;
  width: 15%;
  margin-right: auto;
  background-color: #1C1C1C;
  justify-content: space-between;

  img {
    width: 3.75rem;
    height: 3.75rem;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.125rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    margin-top: 0.3125rem;
    font-size: 15px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .total {
    padding-top: 0.625rem;
    margin-bottom: auto;
  }

  .created {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: auto;
    row-gap: 1rem;
  }

  h2 {
    text-align: center;
    font-size: 30px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 25px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;  
    -webkit-text-fill-color: transparent;
  }

  button {
    font-size: 15px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 60px;
    cursor: pointer;
  }
`;
