import React, {useState, useEffect} from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import CalorieIndex from './calorie/CalorieIndex';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({ 
    nav:{
      minHeight:'20px',
      backgroundColor: '#000'
    }, 
    footer:{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      minHeight: '5vh',
      textAlign:'center',
      lineHeight:'5vh',
      fontWeight: '500',
      backgroundColor: '#000' 
    },
    copy:{
      color: 'rgb(153, 153, 153)'
    }
  })
)
  

function App() {
  const [sessionToken, setSessionToken] = useState('')
  const classes = useStyles();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews =()=>{
    return(sessionToken === localStorage.getItem('token') ? <CalorieIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }
  return (
    <div>
        <Sitebar className={classes.nav} clickLogout={clearToken}>Calorie Watcher</Sitebar>
        <div  className={classes.container}>
        {protectedViews()}
        <footer className={classes.footer}><span className={classes.copy}>&copy; MIZUE O'BARA 2020</span></footer>
        </div>
    </div>
  );
}

export default App;
