import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../UI/button/button';
import classes from './CheckoutSummary.css';



const CheckoutSummary=(props)=>{




  return(

    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your Burger</h1>

      <div style={{width:'300px' ,margin:'auto'}}>

          <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>


    </div>



  );
}

export default CheckoutSummary;
