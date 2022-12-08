import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  justify-content: center;
  background-color: #1C1C1C;
  padding-top: 0.625rem;
  width: 60%;

  select {
    display: flex;
    text-align: center;
    width: 12.5rem;
    align-self: center;
    box-shadow: 5px 5px 8px black;
    background-color: #696969;
  }

  .icons {
    display: flex;
    gap: 1rem;
    color: -webkit-linear-gradient(#D3D3D3, #696969);
  }

  .created {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .link, .git {
    width: 2.5rem;
  }

  h4 {
    font-size: 15px;
    background: -webkit-linear-gradient(#D3D3D3, #696969);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
