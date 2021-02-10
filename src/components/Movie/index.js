import {useState, useEffect} from 'react';

import {MdFavoriteBorder} from 'react-icons/md';
import {FaSearch} from 'react-icons/fa';

import './movie.css';

export default function Movie({
  id,
  title,
  year,
}){
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if(localStorage.getItem(id)){
      setIsFavorite(true);
    }
  }, [localStorage]);

  function handleFavorite(){
    localStorage.setItem(id, {title, year, id});
    setIsFavorite(true);
  }

  function handleNotFavorite(){
    localStorage.removeItem(id);
    setIsFavorite(false);
  }

  return(
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
