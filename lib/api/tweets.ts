import { API_URL } from './config';
import { token } from './config';

export const listTweets = async () => {

   const res = await  fetch(`${API_URL}/tweet`, {
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
        throw new Error ("You are not authorized to fetch the tweets please sign in");
    }
    if(res.status != 200){
        throw new Error ("There was a problem with the fetch operation while fetching the tweets");
    }
    return await res.json();
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const res = response.json();
//         return res;
//       })
//       .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//     throw new Error("There was a problem with the fetch operation while fetching the tweets");
//   });
    };

    export const getTweet = async (id : string) => {

      const res = await  fetch(`${API_URL}/tweet/${id}`, {
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc. depending on your API endpoint
        headers: {
          'Authorization': `Bearer ${token}`, // Set the Authorization header with the Bearer token
          // 'Content-Type': 'application/json', // Adjust the content type if needed
          // Add other headers as necessary
        },
        // You can include a request body for methods like POST or PUT, if required
        // body: JSON.stringify({ key: 'value' }),
      })
      if(res.status == 401){
          throw new Error ("You are not authorized to fetch the tweets please sign in");
      }
      if(res.status != 200){
          throw new Error ("There was a problem with the fetch operation while fetching the tweets");
      }
      
      return await res.json();
      
      }



      export const createTweet = async (data : {content : string}) => {

        const res = await  fetch(`${API_URL}/tweet`, {
          method: 'POST', // or 'POST', 'PUT', 'DELETE', etc. depending on your API endpoint
          headers: {
            'Authorization': `Bearer ${token}`, // Set the Authorization header with the Bearer token
            'Content-Type': 'application/json', // Adjust the content type if needed
            // Add other headers as necessary
          },
          body: JSON.stringify(data),
          // You can include a request body for methods like POST or PUT, if required
          // body: JSON.stringify({ key: 'value' }),
        })
        if(res.status == 401){
            throw new Error ("You are not authorized to fetch the tweets please sign in");
        }
        if(res.status != 200){
          
            throw new Error ("Error creating tweet");
        }
        
        return await res.json();
        
        }