import { EventHandler, useEffect, useState } from "react";

export function useForm(initialValues:{id:string, name: string}):any{
    const [values, setValues] = useState(initialValues);
    const [errors, setError] = useState({});
    
    const handleChange = (event:any)=>{
        const {name, value} =event.target;
        setValues({...values, [name]:value});
    }
    useEffect(() => {
      
      
    }, [initialValues])

    const handleSubmit =({event, callback}:any)=> {
        event.preventDefault();
        if(Object.values(errors).every((err)=> err=="")){
            callback(values);
        }
    }

    const validate =({event, callback}:any)=> {
        event.preventDefault();
        if(Object.values(errors).every((err)=> err=="")){
            callback(values);
        }
    }
    
    return {handleChange, handleSubmit, validate, errors};
}