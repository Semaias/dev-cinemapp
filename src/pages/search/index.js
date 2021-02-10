import { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import { api } from '../../services/api';

import Nav from '../../components/Nav';
import Movie from '../../components/Movie';

import './styles.css';

export default function Search(){
  const [searchText, setSearchText] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [itemNotFound, setItemNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies(e){
    setIsLoading(true);
    if(e){
      e.preventDefault();
    }
    const {data} = await api.get(`?apikey=925eba28&s=${searchText}`);


    if(data.Response === "True"){
      setMovies(data.Search);
      setIsLoading(false);
      setItemNotFound(false);
    }else{
      setItemNotFound(true);
      setIsLoading(false);
    }
  }


  return(
    <Container className="content">
      <div className="w-100">
        <Row>
          <Col>
            <div className="header">
              <h2>CinemApp</h2>
              <p>Bem-vindo ao mundo espetácular do cinema</p>
              <div>
                <form>
                  <input
                    type="input"
                    placeholder="O que você busca..."
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                  />
                  <button type="submit" onClick={e => getMovies(e)}>Buscar</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          { isLoading ?
            <Col lg={12}>
              <div>
                Carregando...
              </div>
            </Col>
            :

            itemNotFound
            ?
            <>
              <Col lg={12}>
                O filme não foi encontrado!
              </Col>
            </>
            :
            movies.map(item => (
              <Col lg={6} sm={12}>
                <Movie
                  key={item.imdbID}
                  id={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                />
              </Col>
            ))
          }
        </Row>
      </div>
      <Row>
        <Col>
          <Nav />
        </Col>
      </Row>
    </Container>
  );
}
