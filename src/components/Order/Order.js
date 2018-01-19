import React from 'react';
import classes from './Order.css';

const Order=(props)=>{


const ingredients=[];

for (let i in props.ingredients){

  ingredients.push({
    name:i,
    amount:props.ingredients[i]});
}

let Output=ingredients.map(ig=>{

  return <span key={ig.name}> {ig.name} ({ig.amount})</span>;
})

return(

  <div className={classes.Order}>

    <p>Ingredients:{Output}</p>
    <p>  Price:<strong>{props.price}</strong></p>

  </div>
);
}
export default Order;
