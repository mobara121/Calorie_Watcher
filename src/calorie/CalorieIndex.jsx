import React, {useState, useEffect} from 'react';
import CalorieCheck from './CalorieCheck';
import FoodChoice from './FoodChoice';
// import FoodSearch from './FoodSearch';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import APIURL from '../helpers/environmentt';


const useStyles = makeStyles(() =>
  createStyles({ 
    container:{
      margin: '20px',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'center'
    },
    content1:{
        margin:'15px 20px',
        maxWidth: '300px'
    },
    content2:{
        margin:'15px 20px',
        maxWidth:'100%'
    },
  })
)

const CalorieIndex = (props) => {
    const [calories, setCalories] = useState([]);
    const classes = useStyles();

    const fetchCalorie = () => {
        fetch(`${APIURL}/calorie/get`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())
        .then((calories) => {
            console.log(calories);
            setCalories(calories)
        })
        console.log('fetched')
    }


    useEffect(()=>{
        fetchCalorie();

    }, [])

    return(
        <div className={classes.container}> 
            <div className={classes.content1}>             
                <CalorieCheck calories={calories} fetchCalorie={fetchCalorie} token={props.token}
                />
            </div>                        
            {/* <div className={classes.content2}>
                <FoodSearch token={props.token}/>
            </div> */}
            <div className={classes.content2}>
                <FoodChoice token={props.token}/>
            </div>
        </div> 
    )
}

export default CalorieIndex;