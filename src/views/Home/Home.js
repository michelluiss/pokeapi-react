import React, { Component } from 'react'
import Header from '../../componets/shared/Header'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  render() {
    return (
      <div className="home-page">
        <Header search={false}></Header>
        <div className="content-page-home">
          <p>Clique na busca para iniciar.</p>
        </div>
      </div>
    )
  }

}