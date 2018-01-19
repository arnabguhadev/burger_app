import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess=(id,orderData)=>{

  return{

        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
  };
};


export const purchaseBurgerFail=(err)=>{

  return{
    type:actionTypes.PURCHASE_BURGER_FAIL,
    error:err
  }
}


export const purchaseBurgerStart=(orderData)=>{

  return dispatch=>{

    axios.post('https://react-my-burger-27357.firebaseio.com/orders.json',orderData)

         .then(res=> { console.log(res.data);
              dispatch(purchaseBurgerSuccess(res.data,orderData))

         })

         .catch(err=>

               dispatch(purchaseBurgerFail(err)));

        });


  }
}
