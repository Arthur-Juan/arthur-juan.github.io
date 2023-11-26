function SetToken(token){
    localStorage.setItem("token", token)
}



function GetToken(){
    return localStorage.getItem("token")
}



function getReserva(token){


    
    if (token) {
        // URL of the API endpoint
        const apiUrl = 'http://localhost:8080/api/v1/appointments';
      
        // Make a GET request with the token in the headers
        fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
            // You may need to add other headers based on your API requirements
          },
        })
        .then(response => {
          // Check if the request was successful (status code 2xx)
          if (response.ok) {
            return response.json(); // Parse the response body as JSON
          } else {
            throw new Error(`Request failed with status: ${response.status}`);
          }
        })
        .then(data => {
          // Handle the data returned from the API
          console.log('Data received:', data);
          return data;
        })
        .catch(error => {
          // Handle errors during the fetch
          console.error('Fetch error:', error);
        });
      } else {
        console.error('Token not found in localStorage');

}
}