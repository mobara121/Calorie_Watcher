import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) =>
  createStyles({
    listItem: {
        maxWidth:'90%',
        minWidth: '250px',
        backgroundColor: '#fbfbfb',
        padding: theme.spacing(3),
        margin: '20px auto',
        boxShadow: "15px 5px 25px 5px rgba(0, 0, 0, 0.918), 0 0 40px rgba(0, 0, 0, 0.3) inset",
    },
    openItem:{
        display: 'flex',
    },
    pic1: {
        width: '10%',
        marginLeft: '15px',
        marginTop: '15px',
        minWidth: 120,
        maxHeight: 120
    },
    labelflex:{
        display:'flex',
        flexDirection: 'column',
        margin:'0 auto'
    },
    label:{
        margin: '0 auto',
        fontSize: 'calc(0.7em + 1.7vmin)',
        padding: '20px 10px',
    },
    nested: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    details: {
        textAlign: 'right',
    }
  }),
);
  
function FoodChoiceResult({name, calories, pic, ingredients}){
    var key = 1;    
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
      };
      
    // var roundCalorie = Math.round(calorie); 
    
    return(
        <div className={classes.container}>
            <List className={classes.listItem}>
                <div className={classes.openItem}>
                    <img className={classes.pic1} src={pic} alt="" />
                    <div className={classes.labelflex}>
                        <h2 className={classes.label}>{name}</h2>
                        <h2 className={classes.label}>{calories} cal.</h2>
                    </div>                            
                </div>                   
                    <ListItem className={classes.details} onClick={handleClick}>
                        <ListItemText primary="Details" />
                        {open ? <ExpandMore /> : <ExpandLess />}
                    </ListItem>
                    <Collapse in={!open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem className={classes.nested}>
                                <p>Ingredients:</p>
                                <ol>{ingredients.map((ingredient) => (
                                    <li key={key++}><span>  </span>{ingredient}</li>
                                ))}
                                </ol>
                            </ListItem>
                        </List>
                    </Collapse>
            </List>
        </div>
    );
}

export default FoodChoiceResult;