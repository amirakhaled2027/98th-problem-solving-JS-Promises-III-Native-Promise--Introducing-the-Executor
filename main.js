//Create a simple promise and pass the resolve function a string value of your choice. 
//Use the setTimeout function as your asynchronous operation. 
//Your setTimeout() function should not exceed 1000ms. 
//Store the promise inside a variable named promise.


const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Hello, World!');
    }, 1000);
})
// logging the resolved value to the console
promise.then(value => {
    console.log(value);
})


