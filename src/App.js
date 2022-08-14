import React, { Component } from "react";
import * as S from "./style/Style";
import Main from "./Main";
import Footer from "./Footer";

import Menu from "./img/menu.png";
import Sacola from "./img/sacola.png";
import Produto from "./img/produto.png";

export default class App extends Component {
  state = {
    menu: Menu,
    sacola: Sacola,
    produto: Produto
  };

  render() {
    return (
      <>
        <S.GlobalStyle />
        <S.Barra>
          <img src={this.state.menu} alt="menu" />
          <h2>flavo</h2>
          <img src={this.state.sacola} alt="sacola" />
        </S.Barra>
        <Main produto={this.state.produto} />

        <Footer />
      </>
    );
  }
}
