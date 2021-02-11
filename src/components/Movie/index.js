import { useState, useEffect } from 'react';

import { MdFavoriteBorder } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

import './movie.css';

export default function Movie({
  id,
  title,
  year,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("favoriteItem")){
      const items = JSON.parse(localStorage.getItem("favoriteItem"));

      items.forEach((item) => {
        if(item.id === id){
          setIsFavorite(true);
        }
      });


    }
  }, [localStorage]);

  function handleFavorite() {
    if(localStorage.getItem("favoriteItem")){
      const items = JSON.parse(localStorage.getItem("favoriteItem"));

      if (items) {
        const safe = [...items, {title, year, id}]

        localStorage.setItem("favoriteItem", JSON.stringify(safe));
      }
      setIsFavorite(true);
    }else{
      localStorage.setItem("favoriteItem", JSON.stringify([{ title, year, id }]));
      setIsFavorite(true);
    }
  }

  function handleNotFavorite() {
    if(localStorage.getItem("favoriteItem")){
      let items =  JSON.parse(localStorage.getItem("favoriteItem"));

      const item = items.findIndex(item => item.id === id);

      console.log(item)

      items.splice(item, 1);

      localStorage.setItem("favoriteItem",  JSON.stringify(items));

      setIsFavorite(false);
    }
  }

  return (
    <div className="movie mt-3">
      <div className="infoMovie">
        <div>
          <strong>{title}</strong>
          <h4>Ano: {year}</h4>
        </div>
      </div>
      {
        isFavorite ?
          <button type="button">
            <MdFavoriteBorder onClick={() => handleNotFavorite()} size={23} color="#000" />
          </button>
          :
          <button type="button">
            <MdFavoriteBorder onClick={() => handleFavorite()} size={23} color="#D4D4D4" />
          </button>
      }
    </div>
  )
}
