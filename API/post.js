

export default async function postData(URL, data){
    // We use an async function to fetch the data from the API. The Try/Catch block is used to handle any errors that may occur during the fetch request.
    try {
        // First we use 'await' to wait for the fetch request to complete. We then store the response in a variable called 'response'. This part differs from the 'GET' request because we are sending data to the API. We need to include the data in the fetch request.
        const response = await fetch(URL, {
            // We first need to define the method of the request. In this case, we are sending a POST request.
            method: 'POST',
            // We then need to define the headers of the request. In this case, we are sending JSON data so we need to specify that the content type is JSON.
            headers: {
                'Content-Type': 'application/json'
            },
            // Finally, we need to include the data that we want to send to the API. We use JSON.stringify to convert the data to a JSON string. This is necessary because the fetch request only accepts strings and not JSON objects.
            body: JSON.stringify(data)
        });
        // We then use 'await' again to wait for the response to be converted to JSON format. We store the converted data in a variable called 'responseData'
        const responseData = await response.json();
        // Finally, we return the data so that it can be used by other parts of the application. You could also log the data to the console if you want to see the output. You can even use the data as a prop in a functional component.
        return responseData;
        // Again we use the catch block to handle any errors that may occur during the fetch request. This is useful for debugging purposes as well as making sure the application doesn't crash if an error occurs.
    } catch (error) {
        console.error('Error:', error);
    }
}