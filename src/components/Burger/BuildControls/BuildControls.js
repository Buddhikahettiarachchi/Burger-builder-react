import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    
  <div className={classes.BuildControls}>
       <p>current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      {controls.map(ctrl=>{
         return <BuildControl
          key={ctrl.label} 
          label={ctrl.label}
          added={()=>props.ingredientAdded(ctrl.type)}
          removed={()=>props.ingredientRemoved(ctrl.type)}
          disable={props.disable[ctrl.type]}
          />
      })}
       <button className={classes.OrderButton} disabled={!props.orderDisable}>ORDER NOW</button>
  </div>
  );
};

export default buildControls;
