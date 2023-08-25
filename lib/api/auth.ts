import { API_URL, token } from "./config";

export const login = async (data: { email: string }) => {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
    
    },
        body: JSON.stringify(data),
        // You can include a request body for methods like POST or PUT, if required
        // body: JSON.stringify({ key: 'value' }),
    });
   
    if (res.status != 200) {
        throw new Error("Error during the login process");
    }
    
    return await res.json();
    }

export const authenticate = async (data: { email: string, emailToken : string }) => {
    const res = await fetch(`${API_URL}/auth/authenticate`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(data),
        // You can include a request body for methods like POST or PUT, if required
        // body: JSON.stringify({ key: 'value' }),
    });
   if (res.status != 200) {
        throw new Error("Error during the login process");
    }
    return await res.json();
}
