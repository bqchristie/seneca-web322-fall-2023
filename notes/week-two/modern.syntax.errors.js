/**
 * Errors
 * 
 * 1. detecting errors before they happen
 * 2. try/catch - show flow with and without catching
 * 3. throwing an error
 * 
 */


console.log(isNaN(2))
console.log(isNaN("sassa"))

// lodash

try {
    throw new Error("This is our special error")

} catch(err) {
    console.error(err)
    
} finally {
    console.log("finally")
}

console.log("Done")