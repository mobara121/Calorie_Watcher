import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Image from '../asset/Healthy-Eating.png'

const useStyles = makeStyles(() =>
  createStyles({ 
     
    container:{
        minHeight: '100vh',
        width: 'auto',
        background: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },
    content:{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
        textAlign: 'center',
         
    },
    titleContainer:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    title:{
        
        width: '50vw',
        height:'15vh',
        lineHeight: '15vh',
        fontFamily:'Corben, cursive',
        backgroundImage:'linear-gradient(to left, #57370D, #FFE998)',
        borderRadius: '35px',
        padding: 'auto 1vw',
        fontSize:'calc(0.7em + 1.7vmin)',
      color: '#000'
    },
    btnContainer:{
        marginTop: '2em',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    btn:{
        margin: '5vh 1vw',
        width: '200px',
    }
  })
)

const Auth = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.titleContainer}>
                    <span className={classes.title}>Calorie Watcher</span>
                </div>
                <div className={classes.btnContainer}>
                    <div className={classes.btn}>
                        <Signup updateToken={props.updateToken}/> {/*5-2*/}
                    </div>
                    <div className={classes.btn}>
                        <Login updateToken={props.updateToken}/> {/*5-2*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
