import React,{Component} from 'react';

import Aux from '../../hoc/Aux';

import Burger from '../../components/burger/burger';

import BuildControls from '../../components/burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';

import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';

//import axios from '../../axios-order';

import Spinner from '../../components/UI/Spinner/Spinner';

import {connect} from 'react-redux';

import * as action from '../../store/actions/index';





class BurgerBuilder extends Component{



      state={

        purchaseInfo: false,
        purchaseble:false,
        loading:false
            }

 componentDidMount(){

   console.log(this.props);

   this.props.onInitIngredients();

//   axios.get('https://awesome-burger.firebaseio.com/ingredients.json')
//   .then(res=>{
//      this.setState({ingredients:res.data})
//   });
 }

      updatePurchaseState(ingredients){


        const sum= Object.keys(ingredients)
        .map(igKey =>{ return ingredients[igKey]})
        .reduce((sum,el)=>{
          return sum+el;
        },0);

        return sum>0;
      }


purchaseHandler=()=>{

  this.setState({purchaseble:true})
}


backdropHandler=()=>{

  this.setState({purchaseble:false})
}

continueHandler=()=>{



// const queryParams=[];
//
// for (let i in this.state.ingredients){
//
//   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
//
// }
//
// queryParams.push('price=' + this.state.totalPrice);
//
// const queryString=queryParams.join('&');

this.props.history.push( '/checkout'
  //  pathname:'/checkout',
  //  search:'?' + queryString

  );

}
cancelHandler=()=>{

  this.setState({purchaseble:false})
}




render(){

  const disableInfo={

        ...this.props.ings
  }

  for(let i in disableInfo){
    disableInfo[i]=disableInfo[i]<=0
  }

let orderSummary=null;



if(this.state.loading){

  orderSummary=<Spinner/>;
}

let burger=<Spinner/>;

if (this.props.ings){

  burger= (
   <Aux>

     <Burger ingredients={this.props.ings}/>
     <BuildControls ingredientAdded={this.props.onIngredientAdded}
                    ingredientSubstracted={this.props.onIngredientRemoved}
      disableInfo={disableInfo}
      price={this.props.price}
      purchase={this.updatePurchaseState(this.props.ings)}
     ordered={this.purchaseHandler}/>


   </Aux>
);
   orderSummary= <OrderSummary ingredients={this.props.ings}
                      clickCancel={this.cancelHandler} clickContinue={this.continueHandler}/>

}





  return (

    <Aux>

       <Modal show={this.state.purchaseble} modalClicked={this.backdropHandler}>


        {orderSummary}
       </Modal>

       {burger}


    </Aux>
  )
}

}

const mapStatetoprops= state=>{
  return {

    ings:state.ingredients,
    price:state.totalPrice,
    error:state.error
  };
}

const mapDispatchtoprops= dispatch=>{
  return {

    onIngredientAdded:(ingName)=>dispatch(action.addIngredient(ingName)),
    onIngredientRemoved:(ingName)=>dispatch(action.removeIngredient(ingName)),
    onInitIngredients:()=>dispatch(action.initIngredient())
  };
}



export default connect(mapStatetoprops,mapDispatchtoprops)(BurgerBuilder);


// addIngredientsHandler=(type)=>{
//
//   const oldCounts=this.state.ingredients[type];
//   const updatedCounts=oldCounts+1;
//   const updatedIngredients={
//
//     ...this.state.ingredients
//   };
//   updatedIngredients[type]=updatedCounts;
//   const priceAddition=INGREDIENT_PRICES[type];
//   const oldPrice=this.state.totalPrice;
//   const newPrice=priceAddition+oldPrice;
//   this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
//
//   this.updatePurchaseState();
//
//
// }
//
//
// removeIngredientsHandler=(type)=>{
//
//   const oldCounts=this.state.ingredients[type];
//   if( oldCounts===0){
//     return;
//   }
//   const updatedCounts=oldCounts-1;
//   const updatedIngredients={
//
//     ...this.state.ingredients
//   };
//   updatedIngredients[type]=updatedCounts;
//   const priceDeduction=INGREDIENT_PRICES[type];
//   const oldPrice=this.state.totalPrice;
//   const newPrice=priceDeduction - oldPrice;
//   this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
//   this.updatePurchaseState();
//
// }
