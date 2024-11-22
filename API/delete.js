export default async function deleteData(URL, id){
    // We use an async function to fetch the data from the API. The Try/Catch block is used to handle any errors that may occur during the fetch request.
try {
    // We need to include the id in the URL so that the API knows which item to delete. We can do this by appending the id to the URL.
    URL = `${URL}/${id}`; // Template literal makes it easier to concatenate strings.
    // First we use 'await' to wait for the fetch request to complete. We then store the response in a variable called 'response'.
    const response = await fetch(URL, {
        // We first need to define the method of the request. In this case, we are sending a DELETE request.
        method: 'DELETE',
        // We then need to define the headers of the request. In this case, we are not sending any data so we don't need to specify any headers.
    });
    // We then use 'await' again to wait for the response to be converted to JSON format. We store the converted data in a variable called 'responseData
    const responseData = await response.json();
    // Finally, we return the data so that it can be used by other parts of the application. You could also log the data to the console if you want to see the output. You can even use the data as a prop in a functional component.
    return responseData;
    // Again we use the catch block to handle any errors that may occur during the fetch request. This is useful for debugging purposes as well as making sure the application doesn't crash if an error occurs.
} catch (error) {
    console.error('Error:', error);
}
}