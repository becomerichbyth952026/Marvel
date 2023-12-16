import React from "react";

export const Cards = ({ data }) => {
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div className="card">
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
                <div className="card-content">
                  <h3>Hulk</h3>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Cards;
