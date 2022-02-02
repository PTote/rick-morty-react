import React from "react";

export const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5>{item.name}</h5>
              <h5>{item.species}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
