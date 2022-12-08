import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  margin-bottom: auto;
  padding: 0 0.3125rem 0.3125rem 0.3125rem;
  background-color: #1C1C1C;
  width: 15%;
  text-align: center;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }

  input::placeholder { 
    background-color: #696969;
    color: black
    
  }

  input {
    box-shadow: 5px 5px 8px black;
    margin-top: 5%;
  }

  h3 {
    font-size: 30px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-size: 40px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
