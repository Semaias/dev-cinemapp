import { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Nav from '../../components/Nav';
import Movie from '../../components/Movie';

import './styles.css';

export default function Favorites(){
  const [searchText, setSearchText] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [itemNotFound, setItemNotFound] = useState(false);

  useEffect(() => {
    getFavorites();
  }, []);

  function getFavorites(e){
    if(localStorage.getItem('favoriteItem')) {
      const items = JSON.parse(localStorage.getItem('favoriteItem'));
      setMovies(items);
    }else{
      setItemNotFound(true);
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
              <>
                <Col lg={12}>
                  Recarregue a página para salvar as alterações
                </Col>
              </>
            </div>
          </Col>
        </Row>
        <Row>
          {
            itemNotFound ?
            <>
              <Col lg={12}>
                Você não tem nada favoritado!
              </Col>
            </>
            :
            movies.map(item => (
              <Col lg={6} sm={12}>
                <Movie
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  year={item.year}
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
