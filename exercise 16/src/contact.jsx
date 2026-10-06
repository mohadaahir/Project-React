import Useform from "./Useform.jsx";

//contact form component
const ContactForm=()=>{
const {formData,handaleChange}=Useform({
    Email:"",
    Password:"",
    Name:"",
    Number:""
})

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission (e.g., send data to a server)
  };
  return (
    
    <form onSubmit={handleSubmit}>
        <div>
        <label>name</label>
        <input
         type="text"
         placeholder="enter name"
         name="name"
         value={formData.name}
        onChange={handaleChange}
        required   
    />    
        </div> 
        <div>
        <label>email</label>
        <input
         type="text"
         placeholder="enter email"
         name="email"
         value={formData.email}
        onChange={handaleChange}
        required   
    />    
        </div> 
        <div>
        <label>password</label>
        <input
         type="number"
         placeholder="enter password"
         name="password"
         value={formData.password}
        onChange={handaleChange}
        required   
    />    
        </div> 
        <div>
        <label>number</label>
        <input
         type="number"
         placeholder="enter password"
         name="number"
         value={formData.number}
        onChange={handaleChange}
        required   
    />    
        </div> 
              <button type="submit">Submit</button>

    </form>
  );
};
export default ContactForm