import React from 'react';


function Details({ pokemon }) {
  if (pokemon === null) return 'Buscando dados'
  return(
    <div className="content-page">
      <h1>Pokemon: {pokemon?.name ? pokemon.name : 'Loading'}</h1>
      <div className="box-info">
        <img src={pokemon.sprites.front_default} alt="Imagem do pokemon"/>
        <div className="row">
          <div className="col-12 mt-5">
            <div className="alert alert-dark" role="alert">Types</div>
            {pokemon.types.map((item, idx) => {
              return <li key={idx} className="list-group-item">{item.type.name}</li>
            })}
          </div>
          <div className="col-12 mt-5">
            <div className="alert alert-dark" role="alert">Abilities</div>
            <ul className="list-group">
              {pokemon.abilities.map((item, idx) => {
                return <li key={idx} className="list-group-item">{item.ability.name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
