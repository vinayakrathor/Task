import { useState } from "react";

function Contact(){
    const[data,setData]=useState({name:'',phone :'',email:'',city:''});

        function handleChange(e){
             
        setData({...data,[e.target.name]: e.target.value})
        console.log(e.target.name,e.target.value,data);
        
     }
     function handleSubmit(){
        console.log("contactdata",data);
        
     }
    return(
        <div className="form-group">
                
               
               <h1>Display Your Info Pls Check:- {
                data.name}
               </h1>
              
            
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            <label>Phone:</label>
            <input
            type="number"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            />
            <label>email</label>
            <input

            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            />
            <label>State/City</label>
            <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            />

            <button onClick={handleSubmit}>
                submit
            </button>

            
        </div>
        

    )
}
export default Contact;

        

    
