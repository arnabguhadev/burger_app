import React,{Component} from 'react';
import Button from '../../../components/UI/button/button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class ContactData extends Component{


  state = {
      orderForm: {
          name: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Your Name'
              },
              value: '',
              validation: {
                  required: true
              },
              valid: false,
              touched: false
          },
          street: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Street'
              },
              value: '',
              validation: {
                  required: true
              },
              valid: false,
              touched: false
          },
          zipCode: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'ZIP Code'
              },
              value: '',
              validation: {
                  required: true,
                  minLength: 5,
                  maxLength: 5,
                  isNumeric: true
              },
              valid: false,
              touched: false
          },
          country: {
              elementType: 'input',
              elementConfig: {
                  type: 'text',
                  placeholder: 'Country'
              },
              value: '',
              validation: {
                  required: true
              },
              valid: false,
              touched: false
          },
          email: {
              elementType: 'input',
              elementConfig: {
                  type: 'email',
                  placeholder: 'Your E-Mail'
              },
              value: '',
              validation: {
                  required: true,
                  isEmail: true
              },
              valid: false,
              touched: false
          },
          deliveryMethod: {
              elementType: 'select',
              elementConfig: {
                  options: [
                      {value: 'fastest', displayValue: 'Fastest'},
                      {value: 'cheapest', displayValue: 'Cheapest'}
                  ]
              },
              value: '',
              validation: {},
              valid: true
          }
      },
      formIsValid: false,
      loading: false
  }

         orderHandler=(event)=>{

           console.log(this.props.ingredients);

           event.preventDefault();

             this.setState({loading:true});

             const formData = {};
             for (let formElementIdentifier in this.state.orderForm) {
                 formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
             }

              const order={


                      ingredients:this.props.ings,
                      price:this.props.price,
                      orderData:formData

  }



        this.props.onOrderBurger(order);
                  // axios.post('https://react-my-burger-27357.firebaseio.com/orders.json',order)
                  // .then(res=> {this.setState({loading:false});
                  //       this.props.history.push('/');
                  // })
                  // .catch(err=>{this.setState({loading:false});
                  // });


}

inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
  //  updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
  //  updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    // let formIsValid = true;
    // for (let inputIdentifier in updatedOrderForm) {
        // formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    // }
    this.setState({orderForm: updatedOrderForm});
}




  render(){

    const formElement=[];

    for(let key in this.state.orderForm){

      formElement.push({

        id:key,
        config:this.state.orderForm[key]
      })
    }


 let form=(
                <form>
                    {formElement.map(formElement=>(
                        <Input
                          key={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          changed={(event) => this.inputChangedHandler(event, formElement.id)}/>


                    ))}


                    <Button btnType="Success" clicked={this.orderHandler}> Order</Button>
   </form>

 );
    return(

      <div className={classes.ContactData}>

        <h4>Enter your Conatct data</h4>

           {form}
      </div>


    )
  }
}

const mapStatetoprops=state=>{
  return{
    ings:state.ingredients,
    price:state.totalPrice
  }
}


const mapDispatchtoprops=dispatch=>{

  onOrderBurger:(orderData)=>dispatch(actions.purchaseBurgerStart(orderData))
}



export default connect(mapStatetoprops)(ContactData);
