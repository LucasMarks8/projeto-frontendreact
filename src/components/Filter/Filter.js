import React from "react";
import { FilterContainer } from "./Styled";

const Filter = (props) => {
  const onHandleMinValue = (e) => {
    props.setMinValue(e.target.value);
  };

  const onHandleMaxValue = (e) => {
    props.setMaxValue(e.target.value);
  };

  const onHandleSearchByName = (e) => {
    props.setSearchByName(e.target.value);
  };

  return (
    <FilterContainer>
      <h1>VM Viagens</h1>
      <div className="inputs">
        <h3>Filtros</h3>
        <input
          type={"text"}
          value={props.minValue}
          placeholder={"valor mínimo"}
          onChange={onHandleMinValue}
        ></input>
        <input
          type={"text"}
          value={props.maxValue}
          placeholder={"valor máximo"}
          onChange={onHandleMaxValue}
        ></input>
        <input
          type={"text"}
          value={props.searchByName}
          placeholder={"pesquisa por destino"}
          onChange={onHandleSearchByName}
        ></input>
      </div>
    </FilterContainer>
  );
};

export default Filter;
