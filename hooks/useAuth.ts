import { useEffect, useState } from 'react'


export default function useAuth() {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const loggedUser = localStorage.getItem("user");
      if(loggedUser){
        setUser(JSON.parse(loggedUser));
      }
      
    }, [])
    
    const login=()=> {

    }
    const logout=()=> {
        
    }
  return {user, login, logout}
}
