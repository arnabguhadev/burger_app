import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class  layout extends Component{


state={

  SideDrawer:false
}

   sideDrawerHandler=()=>{

     this.setState({SideDrawer:false})
   }

   menuToolbarHandler=()=>{

   this.setState((prevState)=>{
     return {SideDrawer: !prevState.SideDrawer};
   });


   }

  render(){


    return(

      <Aux>

                 <Toolbar toggleClicked={this.menuToolbarHandler}/>
                 <SideDrawer open={this.state.SideDrawer} closed={this.sideDrawerHandler}/>

                 <main className={classes.Content}>

                             {this.props.children}
                </main>

      </Aux>



    );
  }


}
export default layout;
