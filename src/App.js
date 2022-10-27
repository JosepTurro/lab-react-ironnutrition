
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';



function App() {

   const [foodLst, setFoodLst]= useState(foods)
   
   const deleteFood = (foodName)=>{
    const foodArray = foodLst.filter(menjare =>{
        return menjare.name != foodName;
    })
    setFoodLst(foodArray)
   }

   const addFoodHandler = (food) => {
    const foodsMod = [...foodLst, food]; //copian
    setFoodLst(foodsMod);
  }

  


  return (
    


    <div className="App">
      <AddFoodForm addFoodHandler={addFoodHandler} />

      <Button> Hide Form / Add New Food </Button>  

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodLst.map((menjar)=>{
        
        return(
          <FoodBox key={menjar.name} food={menjar} deleteHandlerProps={deleteFood} />
        ) ;
      })}
      </Row>
    </div>
  );
}

export default App;
