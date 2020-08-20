import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  addIngredientHandler=(type)=>{

  }

  removeIngredientHandler=(type)=>{
    
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;