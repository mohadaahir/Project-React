import { useState, } from "react";
const Useform=(initialValues)=>{
const [formData,setFormData]=useState({initialValues})

//handle change function
const handaleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})


}
    return{formData,handaleChange}
}
export default Useform