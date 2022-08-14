import React, { Component } from "react";
import * as S from "./style/FooterStyle";

export default class Footer extends Component {
  state = {
    numero: 0,
    quantidade: 10
  };

  adiciona = () => {
    if (this.state.numero < this.state.quantidade) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remover = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        <S.Footer>
          <input type="radio" id="bag" name="tamanho" />
          <label for="bag">BAG (75g)</label>

          <input type="radio" id="jar" name="tamanho" />
          <label for="jar">JAR (150g)</label>
        </S.Footer>

        <S.Contador>
          <button onClick={this.remover}>-</button>
          <h1>{this.state.numero}</h1>
          <button onClick={this.adiciona}>+</button>
        </S.Contador>

        <S.Cart>
          <button>ADD TO CART</button>
        </S.Cart>
      </>
    );
  }
}
