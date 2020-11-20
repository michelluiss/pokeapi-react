import React, { Component } from 'react'
import api from '../../services/api'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../../components/Card'
import { SiPokemon } from 'react-icons/si';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      meta: {},
      hasMore: true,
      loading: true
    }
  }

  async componentDidMount() {
    try {
      const response = await api.get('pokemon?limit=80&offset=0')
      console.log(response)
      this.setState({
        pokemon: response.data.results,
        meta: {
          currentPage: 1
        },
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  fetchPokemon = async (concatState = true) => {
    try {
      const offset = (this.state.meta.currentPage) * 8
      const response = await api.get(`pokemon/?limit=40&offset=${offset}`)
      this.setState({
        pokemon: concatState ? [...this.state.pokemon, ...response.data.results] : [...response.data.results],
        meta: {
          currentPage: this.state.meta.currentPage + 1
        }
      })
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <div className="logo">
            <SiPokemon size="200"/>
          </div>
          <h1>Pokéapi</h1>
          <h4>Selecione seu Pokémon favorito e descubra todas as informações sobre ele!</h4>
          <div className="content-page-home">
            <InfiniteScroll
              dataLength={this.state.pokemon.length}
              next={this.fetchPokemon}
              hasMore={this.state.hasMore}
            >
              {this.state.pokemon.map((pokemon, idx) => (
                <Card pokemon={pokemon} key={idx}></Card>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    )
  }

}