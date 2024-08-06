import { useEffect, useState } from "react";

export function useUser(userId:string) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    //   fetchUser(userId).then((e)=> {
    //     setUser(e);
    //     setLoading(false);
    //   })
    
    
    }, [userId])
    
    return {user, loading};
}