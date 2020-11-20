import React from 'react';
import { CgPokemon } from 'react-icons/cg';

const Card = ({ pokemon }) => (
  <div className="col-3 mb-4">
    <div className="card text-center bg-danger">
      <div className="card-body">
        <div className="box-icon">
          <CgPokemon size="30"/>
        </div>
        <h5 className="card-title color-success">{ pokemon.name }</h5>
        <a href="#" className="btn btn-dark">Read more</a>
      </div>
    </div>
  </div>
);

export default Card;
