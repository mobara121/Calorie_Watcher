import React, {useState, useEffect} from 'react';
import FoodResult from './FoodResult';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Form, Input, Button} from 'reactstrap';
import { FormGroup } from '@material-ui/core';

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
        margin: '40px auto',
        display: 'flex',
        opacity: '0', rotateX: '-90deg', animation: '$form 1s ease-out 1.35s forwards'
    },
    '@keyframes form':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}        
    },
    input: {
      width: '70%',
      maxWidth: 200,
      height: '40px',
      margin: '0 5px',
      fontSize: '17px',
      textAlign: 'center',
    },
    btn: {
      fontSize: '17px',
      margin: '0 5px',
      padding: '0 30px',
      height: '40px'
    },
    cal:{
      display:'flex',
      flexDirection:'row'
    },
    calspan:{
      lineHeight:'40px'
    }
  }),
);

function FoodSearch() {
  const APP_ID = "c2d8408d";
  const APP_KEY = "8246cf93568cd49db6a5dd2e1d5f4d0d";
  const [menus, setMenus] = useState([]);
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');
  const [query, setQuery] = useState('');
  const [calories, setCalories] = useState('');
  const classes = useStyles();
  
  useEffect(()=>{
    const fetcher = () => {      

        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=${calories}`)
        .then(res=>res.json())
        .then(results =>{
          console.log(results.hits);         
          setMenus(results.hits);//2//
        })
        .catch(err => console.log(err))
      };
      fetcher();//3//
      console.log(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=${calories}`);
  }, [query, calories])//4//  
  
  // const updateFilter = e =>{
  //   setFilter(e.target.value);
  // };
  // const updateFilter2 = e =>{
  //   setFilter(e.target.value);
  // };
  
  const getFilter = e =>{
    e.preventDefault();
    setQuery(filter);
    setCalories(filter2);
    setFilter('');   
  };

  return (
    <div className={classes.container}>      
      <h1 className={classes.title}>Find the best recipe for your calorie needs!</h1>
      <Form onSubmit={getFilter} className={classes.form}>
        <FormGroup>
          <Input placeholder="ex. chicken" className={classes.input} type="text" value={filter} onChange={e=>setFilter(e.target.value)}/>
        </FormGroup>
        <FormGroup className={classes.cal}>
          <Input placeholder="ex. 1(Max kcal)" className={classes.input} type="integer" value={filter2} onChange={e=>setFilter2(e.target.value)}/><span className={classes.calspan}>kcal.</span>
        </FormGroup>
        <Button className={classes.btn} type="submit">Search</Button>              
      </Form>
     {menus && menus.map((menu) => {
         return <FoodResult 
          key={menu.recipe.uri}
          label={menu.recipe.label}
              calorie={menu.recipe.calories}
              pic={menu.recipe.image}
              totalTime={menu.recipe.totalTime}
              ingredients={menu.recipe.ingredients}
              />;
        })}     
    </div>
  );
}
  
  export default FoodSearch;
  