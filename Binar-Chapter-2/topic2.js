// //try and catch
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError";
//   }
// }

// try {
//   throw new CustomError("Ini error custom dari try");
// } catch (error) {
//     if (error instanceof CustomError) {
//         console.log("Ini error custom");
//     } else {
//         console.log("Ini error lain");
//     }
// }

// studi kasus

function takeOff(altitud) {
    if (altitud > 10000) {
        throw new Error('Ketinggian terlalu tinggi');
    } else if (altitud < 0) {
        throw new Error('Ketinggian tidak valid!');
    } else if (isNaN(altitud)) {
        throw new Error('Input harus berupa angka');
    } else {
        console.log(`Pesawat lepas landas pada ketinggian ${altitud} meter`);
    }
}

function flightSimulation (altitud) {
    try {
        takeOff(altitud);
    } catch (error) {
        console.log(error);
    }
}

flightSimulation(12000);
flightSimulation(-500);
flightSimulation('seribu');
flightSimulation(8000);

// studi kasus 2
// Define a function named validateInteger which takes a parameter 'number'
// function validateInteger(number) 
// {
//   // Check if the given number is not an integer using Number.isInteger() method
//   if (!Number.isInteger(number)) 
//   {
//     // If the number is not an integer, throw an error with a specific message
//     throw new Error('Invalid number. Please input an integer.');
//   }
//   // Log a message indicating that the number is valid
//   console.log('Number is valid:', number);
// }

// // Example usage:
// try {
//   // Call validateInteger function with an integer argument (12)
//   validateInteger(12); // Valid integer
//   // Call validateInteger function with a non-integer argument (2.12)
//   validateInteger(2.12); // Throws an error
// } catch (error) {
//   // Catch any errors thrown by the validateInteger function and log the error message
//   console.log('Error:', error.message);
// }

// try {
//     // Declare a constant variable undefinedObject and assign it the value undefined
//     const undefinedObject = undefined;
//     // Access a property of the undefined object, which will result in an error
//     console.log(undefinedObject.property); // Accessing property of undefined object
//   } 
//   // Catch block to handle errors thrown in the try block
//   catch (error) {
//     // Check if the error is an instance of TypeError
//     if (error instanceof TypeError) 
//     {
//       // Log an error message indicating property access to an undefined object
//       console.log('Error: Property access to undefined object');
//     } 
//     // If the error is not a TypeError, rethrow the error
//     else 
//     {
//       throw error; // Rethrow the error if it's not a TypeError
//     }
//   }

// Define a function named divide_Numbers that takes two parameters: n1 and n2
// function divide_Numbers(n1, n2) {
//     // Check if n2 is equal to 0
//     if (n2 === 0) {
//       // If n2 is 0, throw an error indicating division by zero is not allowed
//       throw new Error('Error: Division by zero is not allowed.');
//     }  
//     // If n2 is not 0, return the result of dividing n1 by n2
//     return n1 / n2;
//   }
//   // Call the divide_Numbers function with arguments 8 and 3, then log the result to the console
//   console.log(divide_Numbers(8, 3));
//   // Call the divide_Numbers function with arguments 8 and 0, which will throw an error, and handle it
//   console.log(divide_Numbers(8, 0));
  