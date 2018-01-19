import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';



const controls=[
      {label:'Salad',type:'salad'},
      {label:'Bacon',type:'bacon'},
      {label:'Cheese',type:'cheese'},
      {label:'Meat',type:'meat'},


];

const BuildControls =(props)=>(


  <div className={classes.BuildControls}>
  <p> Total Price: {props.price} </p>
    {controls.map(ctrl=>(

      <BuildControl key={ctrl.label} label={ctrl.label}

       added={()=>props.ingredientAdded(ctrl.type)}
       removed={()=>props.ingredientSubstracted(ctrl.type)}
        disable={props.disableInfo[ctrl.type]}/>





    ))}

    <button className={classes.OrderButton}
      disable= {!props.purchase}
      onClick={props.ordered}>Order</button>

  </div>
);

export default BuildControls;
