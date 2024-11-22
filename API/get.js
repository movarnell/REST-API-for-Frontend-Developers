export default async function getData(URL) {
    // We use an async function to fetch the data from the API. The Try/Catch block is used to handle any errors that may occur during the fetch request.
    try {
        // First we use 'await' to wait for the fetch request to complete. We then store the response in a variable called 'response'.
        const response = await fetch(URL);
        // We then use 'await' again to wait for the response to be converted to JSON format. We store the converted data in a variable called 'data'.
        const data = await response.json();

        // Finally, we return the data so that it can be used by other parts of the application. You could also log the data to the console if you want to see the output. You can even use the data as a prop in a functional component.
        return data;
    } catch (error) {
        // Again we use the catch block to handle any errors that may occur during the fetch request. This is useful for debugging purposes as well as making sure the application doesn't crash if an error occurs.
        console.error('Error:', error);
    }
}
