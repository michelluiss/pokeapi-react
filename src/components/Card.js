import React from 'react';
import { Link } from 'react-router-dom'
import { CgPokemon } from 'react-icons/cg';

const Card = ({ pokemon }) => (
  <div className="col-3 mb-4">
    <div className="card text-center bg-danger">
      <div className="card-body">
        <div className="box-icon">
          <CgPokemon size="30"/>
        </div>
        <h5 className="card-title color-success">{ pokemon.name }</h5>
        <Link to={{
            pathname: '/pokemon',
            url: pokemon.url
          }} className="btn btn-dark">Read more</Link>
      </div>
    </div>
  </div>
);

export default Card;
