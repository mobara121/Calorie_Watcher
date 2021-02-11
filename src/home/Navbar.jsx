import React, {useState} from 'react';
//3//
import {Navbar, NavbarBrand, Nav, NavItem, Button, NavbarToggler, Collapse} from 'reactstrap';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({ 
    container:{
      minHeight:'20px',
      lineHeight: '20px',
      backgroundColor: '#000',
      marginBottom: 0
    },
    brand:{
        color: 'rgb(153, 153, 153)',
        fontFamily: 'Corben, cursive',
        fontSize: '1rem',
        transitionDuration:'0.15s',
        '&:hover':{
            color: '#fff'
        }
    }
  })
) 

const Sitebar =(props) => {
    const classes = useStyles();

    return(
        <Navbar className={classes.container} color="faded" light expand="md">
            <NavbarBrand href="/"><span className={classes.brand}>Calorie Watcher</span></NavbarBrand>
                <div style={{position:'fixed', right: 30, marginRight:'1vw'}}>
                    <div style={{margin:'7px auto'}}>
                        <button style={{height:'4vh', borderRadius:'5px', backgroundColor:'red', border: '1px solid red', color:'#fff'}} onClick={props.clickLogout}>Logout</button> {/*4*/}
                    </div>
                </div>

        </Navbar>
    )
}

export default Sitebar;