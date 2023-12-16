import React from "react";
import MarvelImg from "../media/187551-captain-america-1440x829.jpg";
import MarvelLogo from "../media/logo.jpg";
import { Cards } from "./Cards";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Main = () => {
  const [url, setUrl] = useState(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c6af68b73c58eab3d79df3489d7f849c&hash=db3748ad2119e262ea8f7cdf6199d575"
  );
  const [item, setItem] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    };
    fetch();
  }, [url]);
  return (
    <>
      <div className="header">
        <div className="py">
          <img src={MarvelImg} alt="" />
        </div>
        <div className="search-bar">
          <img src={MarvelLogo} alt="logo" />
          <input
            type="search"
            placeholder="Search Information"
            className="search"
          />
        </div>

        <div className="content">
          {!item ? <p>Not Found</p> : <Cards data={item} />}
        </div>
      </div>
    </>
  );
};
