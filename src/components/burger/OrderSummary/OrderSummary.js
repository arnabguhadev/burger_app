import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/button/button';

const OrderSummary= (props) =>{

  const ingredientSummary=Object.keys(props.ingredients)
        .map(igKey=>{
            return (<li key={igKey}><span style ={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
          </li>);

        });


return(
 <Aux>
   <h3> Your Order</h3>
   <ul>

     {ingredientSummary}
   </ul>
    <Button btnType="Danger" clicked={props.clickCancel}>Cancel</Button>
    <Button btnType="Success" clicked={props.clickContinue}>Continue</Button>

 </Aux>

);
}

export default OrderSummary;
