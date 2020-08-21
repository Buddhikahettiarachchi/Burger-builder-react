import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGERDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalprice: 4,
    purchasable:false,
  };

  checkPurchasableState=()=>{
    let sumOfValues=0;
    const ingredientValues = Object.values(this.state.ingredients)
    ingredientValues.forEach((ingredientValue)=>{
      sumOfValues = sumOfValues+ingredientValue;
    })
   
    sumOfValues === 0? this.setState({purchasable:false}) :this.setState({purchasable:true});
   
  }
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGERDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalprice: newPrice,
    },this.checkPurchasableState);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if(updatedCount < 0){return}
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGERDIENT_PRICES[type];
    const oldPrice = this.state.totalprice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalprice: newPrice,
    },this.checkPurchasableState);
  };

  render() {
    console.log(this.state.purchasable)
    const disabledInfo = {...this.state.ingredients};
    for(let ingredientKey in disabledInfo){
      disabledInfo[ingredientKey]= !disabledInfo[ingredientKey]
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler}
          totalPrice={this.state.totalprice}
          disable={disabledInfo}
          orderDisable={this.state.purchasable}
          />
      </Aux>
    );
  }
}

export default BurgerBuilder;
