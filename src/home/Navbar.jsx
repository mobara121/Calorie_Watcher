import React, {useState} from 'react';
//3//
import {Navbar, NavbarBrand, Nav, NavItem, Button, NavbarToggler, Collapse} from 'reactstrap';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({ 
    container:{
      minHeight:'20px',
      backgroundColor: '#000'
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
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button> {/*4*/}
                    </NavItem>
                </Nav>

        </Navbar>
    )
}

export default Sitebar;