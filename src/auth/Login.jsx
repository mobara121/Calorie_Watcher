import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import APIURL from '../helpers/environment'

const useStyles = makeStyles(() =>
  createStyles({ 
    card:{
        minHeight:'15px',
        backgroundColor: '#898e92',
        borderColor:'#898e92',
        borderRadius:'10px',
        padding:'5px 10px',
        color: '#000',
        fontWeight:'500',
        width: '200px',
        transitionDuration: '0.15s',
        '&:hover':{
          color: '#fff',
          fontSize: '20px',
          fontWeight: '500',
          backgroundColor:'#74797c',
          borderColor:'#74797c',
        }
      },
      iconbtn:{
        fontSize:"1.2rem",
        padding: '0',
        color:"#fff",
        fontWeight: '600'
    },
    label:{
        color:'#fff',       
    },
    alert:{
        color:'#c00808',
        fontSize: '13px',
        textAlign: 'left'
    } 
  })
)

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })          
        })     
        .then(
            (response)=>{
                if(!response.ok){
                    setAlert('Verify your username and password.')
                }
                return response.json()
            }
        ).then((data)=>{
            props.updateToken(data.sessionToken);
        })
    }

    return(
        <div>
            <div className={classes.card}>
            <IconButton className={classes.iconbtn}
             onClick={handleExpandClick}>
                 <p className={classes.label}>Login</p>
                <ExpandMoreIcon />
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={e => setUsername(e.target.value)} name="username" value={username}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={e => setPassword(e.target.value)} name="password" value={password}></Input>
                </FormGroup>
                <p className={classes.alert}>{alert}</p>
                <Button className={classes.btn} type="submit">Login</Button>
            </Form>
            </Collapse>
            </div>
        </div>
    )
}

export default Login;