import React, { Component } from 'react'
import api from '../../services/api'

const DetailsPoke = (pokemon) => {
  return(
    <div>
      <p>{pokemon.name}</p>
      {/* {this.state.pokemon.types.map((item, idx) => {
        <p key={idx}>{item}</p>
      })} */}
      <p>{pokemon.name}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.name}</p>
    </div>
  )
}

const FeedbackNoData = () => {
  return('Nenhum dado para informar')
}

const DisplayDetails = (pokemon) => {
  console.log(pokemon);
  if(pokemon.id) return <DetailsPoke pokemon={pokemon}></DetailsPoke>
  else return <FeedbackNoData></FeedbackNoData>
}
export default class PokemonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: {},
      url: props.location.url
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get(this.state.url)
      console.log(response)
      this.setState({
        pokemon: response.data,
      })
    } catch (error) {
      console.log(error)
    }
    console.log(this.state.pokemon)
  }
  
  render() {
    return (
      <div className="pokemon-page">
        <DisplayDetails pokemon={this.state.pokemon}></DisplayDetails>
      </div>
    )
  }
}
