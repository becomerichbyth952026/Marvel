import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const fetch = async () => {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=c6af68b73c58eab3d79df3489d7f849c&hash=db3748ad2119e262ea8f7cdf6199d575`
    );
    setItem(res.data.data.results[0]);
  };
  fetch();
  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="box-content">
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt=""
            />
          </div>
          <div className="left-box"></div>
          <h1>{item.name}</h1>
          <h4>{item.description}</h4>
        </div>
      )}
    </>
  );
};
