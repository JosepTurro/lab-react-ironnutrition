
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';



function App() {

   const [foodLst, setFoodLst]= useState(foods)

  return (
    <div className="App">
      <h1>Food List</h1>
      {foodLst.map((menjar)=>{
        
        return(<div>
          <p>{menjar.name}</p>
          <img src= {menjar.image} width={120} />
        </div>) ;
      })}
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
      
    </div>
  );
}

export default App;
