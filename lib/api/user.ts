import { API_URL } from './config';
import { token } from './config';

export const  getUser = async (email : string) => {

    const res = await  fetch(`${API_URL}/user/${email}`, {
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc. depending on your API endpoint
        headers: {
          'Authorization': `Bearer ${token}`, // Set the Authorization header with the Bearer token
          'Content-Type': 'application/json', // Adjust the content type if needed
          // Add other headers as necessary
        },
        // You can include a request body for methods like POST or PUT, if required
        // body: JSON.stringify({ key: 'value' }),
      })
      if(res.status == 401){
          throw new Error ("You are not authorized to fetch the User please sign in");
      }
      if(res.status != 200){
          throw new Error ("There was a problem with the fetch operation while fetching the User");
      }
      console.log(res);
      return await res.json();

      
}
