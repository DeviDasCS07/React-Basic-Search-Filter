import React from "react";

const CountryDetail = (props) => {
  const { name, flag } = props;
  return (
    <div>
      <p>
        <img src={flag} alt={name} style={{ width: "40px", height: "40px" }} />
      </p>
      <p>{name}</p>
    </div>
  );
};

export default CountryDetail;
