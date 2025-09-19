import { useState } from "react"
import '../src/reg.css'

function Test(){
    const [data,setData]=useState({name:'',branch:'',Country:'',phone:'',state:'',colony:'',});

    function handleChange(e){
        
        setData({...data,[e.target.name] : e.target.value});
        console.log(e.target.name, e.target.value,data);
    }
    function handleSubmit(){
        console.log("formdata",data);
        
    }

    return(
        <div className="form-group">
            <label>Name:</label>
            <input
                          
                          type="text"
                          name="name"
                          value={data.name}
                          onChange={handleChange}
                          
                        />
                        <label>branch:</label>
            <input
                          
                          type="text"
                          name="branch"
                          value={data.branch}
                          onChange={handleChange}
                          
                        />
                         <label>phone:</label>
            <input
                          
                          type="number"
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                          
                        />
                        <label>Country:</label>
            <input
                          
                          type="text"
                          name="Country"
                          value={data.Country}
                          onChange={handleChange}
                          
                        />
                         <label>State:</label>
            <input
                          
                          type="text"
                          name="state"
                          value={data.state}
                          onChange={handleChange}
                          
                        />
                         <label>colony:</label>
            <input
                          
                          type="text"
                          name="colony"
                          value={data.colony}
                          onChange={handleChange}
                          
                        />
                         <button onClick={handleSubmit}>
                            submit
                            
                         </button>
                         
                         
           
                        
                        
        </div>
        
    )
}
export default Test;