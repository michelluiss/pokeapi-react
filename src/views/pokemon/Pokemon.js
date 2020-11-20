import React, { Component } from 'react'
import Details from '../../components/Details'
import api from '../../services/api'
import { SiPokemon } from 'react-icons/si';

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      url: props.location.url,
      abilities: null
    };
  }

  async componentDidMount(prevProps) {
    if(!this.props.location.url) return
    else {
      try {
        const response = await api.get(this.props.location.url)
        this.setState({ pokemon: response.data })
        this.state.pokemon.abilities.forEach(item => {
          this.fetchAbilities(item.ability.url)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  fetchAbilities = async (url) => {
    console.log(url)
    if(!url) return
    else {
      api.get(url)
      .then(response => {
        if (this.state.abilities) this.setState({ abilities: [...this.state.abilities, ...response.data] })
        else this.setState({ abilities: [...response.data] })
      })
      .catch (error => {
        console.log(error)
      })
      
    }
  }

  render() {
    return (
      <div className="pokemon-page">
        <div className="container">
          <div className="logo">
            <SiPokemon size="200"/>
          </div>
          <Details pokemon={this.state.pokemon} abilities={this.state.abilities} ></Details>
        </div>
      </div>
    )
  }

}
