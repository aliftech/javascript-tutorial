class ValidationErrors extends Error {
    constructor(success, message, data) {
        super(success, message, data);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationErrors("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationErrors("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationErrors) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}