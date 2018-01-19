import * as actionTypes from './actionTypes';

import axios from '../../axios-order';

export const addIngredient=(name)=>{


  return{

    type:actionTypes.ADD_INGREDIENT,
    ingredientname:name
  }
}

export const removeIngredient=(name)=>{


  return{

    type:actionTypes.REMOVE_INGREDIENT,
    ingredientname:name
  }
}

export const setIngredient=(ingredients)=>{


  return{

    type:actionTypes.SET_INGREDIENT,
    ingredients:ingredients
  }
}


export const fetchIngredintsFailed=()=>{

  return{

    type:actionTypes.FETCH_INGREDIENTS_FAILED
  }
}

export const initIngredient=(name)=>{


  return dispatch =>{

    axios.get('https://react-my-burger-27357.firebaseio.com/ingredients.json')
          .then(res=>{
                  dispatch(setIngredient(res.data));
         }).catch(err=>{

                dispatch(fetchIngredintsFailed());
         });

  };



}
