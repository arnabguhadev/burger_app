import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const SideDrawer=(props)=>{

  let collectClasses= [classes.SideDrawer, classes.Close]

  if(props.open){

    collectClasses=[classes.SideDrawer, classes.Open]
  }


  return (

<Aux>
    <Backdrop show={props.open} clicked={props.closed} />

    <div  className={collectClasses.join(' ')}>

      <Logo height='11%'/>
      <nav>
        <NavigationItems/>

      </nav>
    </div>

    </Aux>

  );
}

export default SideDrawer;
