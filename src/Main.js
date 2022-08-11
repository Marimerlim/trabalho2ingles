import React, { Component } from "react";
import * as S from "./style/MainStyle";

export default class App extends Component {
  render() {
    return (
      <>
        <S.Img src={this.props.produto} alt="produto" />
        <S.Produto>
          <h2>passion</h2>
          <h2 className="fino">$15</h2>
        </S.Produto>

        <S.Texto>
          <h3>WHAT´S INSIDE</h3>
          <p>Chili, oregano, safran, paprika</p>
          <h3>WHY WE LOVE IT</h3>
          <p>
            This one will add a little savoury flavor to and turn any meal to a
            culinary masterpiece
          </p>
        </S.Texto>
      </>
    );
  }
}
