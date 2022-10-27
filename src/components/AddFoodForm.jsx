import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm({addFoodHandler}){

    const [nom, setNom]= useState('');
    const [foto, setFoto]= useState('');
    const [calorias, setCalorias]= useState(0);
    const [servingss, setServingss]= useState(1);
    
    const submitForm = (e)=>{
        e.preventDefault();
        addFoodHandler({
            name:nom,
            calories:calorias,
            image:foto,
            servings:servingss
        })
    }
    const nomHandler = (e)=>{
        setNom(e.target.value)
    }
    const fotoHandler = (e)=>{
        setFoto(e.target.value)
    }
    const caloriasHandler = (e)=>{
        setCalorias(e.target.value)
    }
    const servingssHandler = (e)=>{
        setServingss(e.target.value)
    }

    
  
    return(
      <form onSubmit={submitForm}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={nom} type="text" onChange={nomHandler} />

        <label>Image</label>
        <Input value={foto} type="text" onChange={fotoHandler} />

        <label>Calories</label>
        <Input value={calorias} type="number" onChange={caloriasHandler} />

        <label>Servings</label>
        <Input value={servingss} type="number" onChange={servingssHandler} />

        <button type="submit">Create</button>
      </form>
    );
}
export default AddFoodForm;
