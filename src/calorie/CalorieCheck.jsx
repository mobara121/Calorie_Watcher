import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import APIURL from '../helpers/environment';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() =>
  createStyles({ 
    title:{
        fontSize: '1.3em',
        color: '#000',
        fontFamily: 'Corben, cursive',
        opacity: '0', rotateX: '-90deg', animation: '$title 1s ease-out 1.0s forwards'
    },
    '@keyframes title':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    form1:{
        opacity: '0', rotateX: '-90deg', animation: '$form1 1s ease-out 1.1s forwards'
    },
    '@keyframes form1':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    form2:{
        opacity: '0', rotateX: '-90deg', animation: '$form2 1s ease-out 1.15s forwards'
    },
    '@keyframes form2':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    form3:{
        opacity: '0', rotateX: '-90deg', animation: '$form3 1s ease-out 1.2s forwards'
    },
    '@keyframes form3':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    btn:{
        opacity: '0', rotateX: '-90deg', animation: '$btn 1s ease-out 1.25s forwards'
    },
    '@keyframes btn':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    },
    card:{
        margin: '30px auto', maxWidth: '250px', height: '130px', textAlign: 'center', opacity: '0', rotateX: '-90deg', animation: '$card 1s ease-out 1.3s forwards'
    },
    '@keyframes card':{
        from:{opacity: 0, transform: 'rotateX(-90deg)'},
        to:{opacity: 1, transform: 'rotateX(0deg)'}
    }, 
    resultcontainer:{
        display:'flex',
        flexDirection:'column'

    },
    result:{
        fontSize:'48px', lineHeight:'48px', color:'red', fontWeight: 700
    },
    // unit:{
    //     fontSize:'15px'
    // }
  })
)
//import APIURL from '../helpers/environment';

const CalorieCheck = (props) => {
    const classes = useStyles();
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [lifestyle, setLifestyle] = useState('')
    const [requiredCal, setRequiredCal] = useState('')
    
    const filterData = (e)=>{
        e.preventDefault();
        // debugger;
        fetch(`${APIURL}/calorie/get/${gender}/${age}/${lifestyle}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())
        .catch((error) => {
            console.log(error)  
          })
        .then((logData) => {
            // debugger;
            setRequiredCal(logData.required_calorie+' kcal')
            console.log(logData.required_calorie)
        })
        .catch((error) => {
          console.log(error)  
        })        
    }

    // useEffect(()=>{
    //     filterData();
    // }, []);
    return(
        <div>
        <h1 className={classes.title}>Look up the max amount of calories you should eat per day !</h1>
        <Form onSubmit={filterData}> {/*5*/}
                <FormGroup className={classes.form1}>
                    <Label htmlFor="gender">Gender</Label>
                    <Input type="select" onChange={(e) => setGender(e.target.value)} name="gender" value={gender}>
                    {/* {props.calories.map((calorie) => {                        
                        return(
                        <option key={calorie.id} value={gender}>{calorie.gender}</option>
                        )}        
                        )}  */}
                        <option> </option>
                        <option>male</option>
                        <option>female</option>
                      
                    </Input>
                </FormGroup>
                <FormGroup className={classes.form2}>
                    <Label htmlFor="age">Age</Label>
                    <Input type="select" onChange={e => setAge(e.target.value)} name="age" value={age}>
                    {/* {props.calories.map((calorie) => {
                        return( 
                            <option key={calorie.id} value={calorie.age}>{calorie.age}</option>
                        )}        
                        )} */}
                        <option> </option>
                        <option>15-17</option>
                        <option>18-29</option>
                        <option>30-49</option>
                        <option>50-64</option>
                        <option>65-74</option>
                        <option>75+</option>
                    </Input>
                </FormGroup>
                <FormGroup className={classes.form3}>
                    <Label htmlFor="lifestyle">Lifestyle</Label>
                    <Input type="select" onChange={e => setLifestyle(e.target.value)} name="lifestyle" value={lifestyle}>
                    {/* {props.calories.map((calorie) => {
                        return( 
                            <option key={calorie.id} value={calorie.lifestyle}>{calorie.lifestyle}</option>
                        )}        
                        )} */}
                        <option> </option>
                        <option>lazy</option>
                        <option>normal</option>
                        <option>active</option>
                    </Input>
                </FormGroup>
                <Button className={classes.btn} type="search">Calorie Check!</Button>
            </Form>
            <div>
                <Card className={classes.card}>
                    <p className={classes.unit}>Your required calorie is:</p>
                    <div className={classes.resultcontainer}>
                   <div className={classes.result} onChange={e => setRequiredCal(e.target.value)} id="calorie">{requiredCal} {/*<p className={classes.unit}>kcal.</p>*/}</div></div>

                </Card>
                
            </div>

        </div>
    )
}

export default CalorieCheck;
