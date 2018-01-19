import React, { Component } from 'react';

import classes from './Modal.css';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

class Modal extends Component {

shouldComponentUpdate(nxtProps,nxtState){

  return nxtProps.show!==this.props.show ||nxtProps.children!==this.props.children ;
}

componentWillUpdate(){

  console.log('modal updates'); 
}




render(){



  return(


  <Aux>

    <Backdrop show={this.props.show}  clicked={this.props.modalClicked}/>
    <div className={classes.Modal} style={{transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',

                                         opacity: this.props.show ? '1':'0' }}>

      {this.props.children}


    </div>



  </Aux>

  )
}


}

export default Modal;
