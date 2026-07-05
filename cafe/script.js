const BASE_URL = 'http://127.0.0.1:8000'

async function oke(){
const response = await fetch(`${BASE_URL}/api/exo`, {
       method: 'GET',
       headers: {
           "Content-Type": "application/json"
       }
   });
   console.log(await response.json());


}