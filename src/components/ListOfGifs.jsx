import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ params }) => {
  const { keyword } = params

  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);


  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
    .then(gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword]);

  if (!loading) {
    return <>
    {
      gifs.map(({ id, title, url }) => 
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      ) 
    }
    </>
  } else {
    return (
      <div className="Loader">
        <h1>Cargando... ⏳</h1>
      </div>
    )
  }
};

export default ListOfGifs;
