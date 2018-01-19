import * as actionTypes from '../actions/actionTypes';



const intialState = {

  ingredients:null,
  totalPrice:4,
  error:false
};

const INGREDIENT_PRICES={


            cheese:4,
            bacon:5,
            meat:10,
            salad:2
}

const reducer =(state=intialState,action)=>{

     switch(action.type){

       case actionTypes.ADD_INGREDIENT:
            return{
                    ...state,
                    ingredients:{

                      ...state.ingredients,
                      [action.ingredientname]:state.ingredients[action.ingredientname] +1
                    },

                    totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientname]


            }



      case actionTypes.REMOVE_INGREDIENT:
      return{
              ...state,
              ingredients:{

                ...state.ingredients,
                [action.ingredientname]:state.ingredients[action.ingredientname] - 1
              },

              totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientname]
      }

      case actionTypes.SET_INGREDIENT:
            return{

                ...state,
                ingredients:action.ingredients,
                error:false
            };

      case actionTypes.FETCH_INGREDIENTS_FAILED:
              return{
                     ...state,
                     error:true

              };


      default:
           return state;

     }


};

export default reducer;
