import React, {useEffect, useState} from'react';
import FoodChoiceResult from './FoodChoiceResult';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Input, Button} from 'reactstrap';
// import Card from '@material-ui/core/Card';
import APIURL from '../helpers/environment';


const useStyles = makeStyles(() =>
  createStyles({ 
    container:{
        textAlign: 'center'
      },
      title:{
        fontSize: '30px',
        color: '#000',
        fontFamily: 'Corben, cursive',
        opacity: '0', rotateX: '-90deg', animation: '$title 1s ease-out 1.3s forwards'
      },
      '@keyframes title':{
          from:{opacity: 0, transform: 'rotateX(-90deg)'},
          to:{opacity: 1, transform: 'rotateX(0deg)'}
      },
      form: {
          justifyContent:'center',
          margin: '20px auto',
          display: 'flex',
          flexWrap: 'wrap',
          opacity: '0', rotateX: '-90deg', animation: '$form 1s ease-out 1.35s forwards'
      },
      '@keyframes form':{
          from:{opacity: 0, transform: 'rotateX(-90deg)'},
          to:{opacity: 1, transform: 'rotateX(0deg)'}        
      },
      formgroup:{
        display:'flex',
        flexDirection:'column',
        width: '250px',
        // height: '60px',
        // lineHeight: '60px',
        // marginTop: '10px'
      },
      label:{
        width: '60%',
        textAlign:'left',
        marginBottom:0
      },
      input1: {       
        maxWidth: 200,
        height: '40px',
        // margin: '0 5px',
        fontSize: '17px',
        textAlign: 'center',
      },
      calinput:{
        display:'flex',
        marginLeft:'-5px'
      },
      input2: {
        // width: '40%',
        maxWidth: 150,
        height: '40px',
        margin: '0 5px',
        fontSize: '17px',
        textAlign: 'center',
      },
      btncontainer:{
        marginTop:'20px',
        width:'250px',
        textAlign:'left'
      },
      btn: {
        fontSize: '17px',
        margin: '10px, 10px, 10px, 0',
        padding: '0 30px',
        height: '40px',
      },
      calspan:{
        lineHeight:'30px'
      },
      alert:{
        color:'#c00808',
        fontSize: '18px',
        textAlign: 'center'
    }
  })
)

const FoodChoice = (props) => {
    const [foods, setFoods] = useState([]);
    const [group, setGroup] = useState('');
    const [calories, setCalories] = useState('');
    const classes = useStyles();
  
  useEffect(()=>{ 
    setTimeout(()=>{ 
    const fetchFood = () => {
        fetch(`${APIURL}/food/get/${group}/${calories}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())     
          .then((foods) => {
           debugger;
            console.log(foods)
            return setFoods(foods)
        })        
        .catch(err => console.log(err))
    };
    fetchFood();
  }, 4000);
  // clearTimeout(timer)
  }, [group, calories, props.token])  
    
  const getFilter = e =>{
    e.preventDefault();
    setGroup(group);
    setCalories(calories);

  }

    return(
      
        <div className={classes.container}>
            <h1 className={classes.title}>Find the best recipe for your calorie needs!</h1>
            <form  onSubmit={getFilter} className={classes.form}>
                <div className={classes.formgroup}>
                  <label className={classes.label}htmlFor="group">Meal Group</label>
                  <Input type="select" className={classes.input1} value={group} onChange={e=>setGroup(e.target.value)}>
                    <option> </option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                  </Input>
                </div>
                <div className={classes.formgroup}>
                  <label className={classes.label} htmlFor="calorie">Calorie</label>
                  <div className={classes.calinput}>
                    <Input className={classes.input2} type="integer" value={calories} onChange={e=>setCalories(e.target.value)}>
                    </Input>
                      <span className={classes.calspan}>cal.</span>
                    </div>
                </div>
                <div className={classes.btncontainer}>
                  <Button className={classes.btn} type="submit">Search</Button>
                </div>            
            </form>
            <div>
                             
              {foods && foods.map((food, id) =>{  
                debugger;
                return(                
                <FoodChoiceResult
                  key={food.id}
                  name={food.name}
                  calories={food.calories}
                  pic={food.image_url}
                  ingredients={food.ingredients}
                /> 
                )
              })}              
            </div> 
        </div>
    )
}

export default FoodChoice;