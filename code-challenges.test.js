// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Test Driven Development
// describe("funcName", () => {
//   it("what funcName will do", () => {
//     const var1 = ["1"]
//     const var1Output = ["2"]
//     const var2 = ["2"]
//     const var2Output = ["4"]
//     expect(funcName(var1)).toEqual(var1Output)
//     expect(funcName(var2)).toEqual(var2Output)
//   })
// })


// Please read all questions thoroughly
// Pseudo coding is REQUIRED (really, really is it. Can we just talk it out maybe?)
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// Test Driven Development
// describe("randomArray", () => {
//   it("that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
//     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     const colors1Output = [ 'yellow', 'pink', 'blue', 'green' ]
//     const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//     const colors2Output = [ 'periwinkle', 'indigo', 'ochre', 'saffron', 'aquamarine' ]
//     expect(randomArray(colors1)).toEqual(expect.arrayContaining(colors1Output))
//     expect(randomArray(colors2)).toEqual(expect.arrayContaining(colors2Output))
//   })
// })

    // Jest Test RTN:
    // ReferenceError: randomArray is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

    // Pseudocode:
        //Paramenter will be an array 
        //Argument: const colors1 and const colors2
        //Create a function named randomArray 
        //Utilize .shift() to remove the first item from the array and a for loop with a random Math.floor(Math.random()) function to randomize the remaining elements by moving placeHolder and swapping spots with another element in the array.
        //Return the array, or else you'll be undefined...


const randomArray = (array) => {
      array.shift();
      for(let i = 0; i < array.length; i++) {
        let placeHolder = array[i]
        let randomIndex = Math.floor(Math.random() * array.length);
        array[i] = array[randomIndex];
        array[randomIndex] = placeHolder
      }
      return array
  }
  console.log(randomArray(colors1))
  console.log(randomArray(colors2))
                // just double checking .shift() below
                // colors1.shift()
                // console.log(colors1)

    // Jest Test Return PASS  
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.197 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 0.99s.
        




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// Test Driven Development
// describe("totalTally", () => {
//   it("takes in an object that contains up votes and down votes and returns the end tally", () => {
//     const votes1 = {upVotes: 13, downVotes: 2}
//     const votes1Output = 11
//     const votes2 = {upVotes: 2, downVotes: 33}
//     const votes2Output = -31
//     expect(totalTally(votes1)).toEqual(votes1Output)
//     expect(totalTally(votes2)).toEqual(votes2Output)
//   })
// })

    // Jest Test RTN:
    // ReferenceError: totalTally is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


// b) Create the function that makes the test pass.

    // Pseudocode:
        //Paramenter will be an object 
        //Argument: const votes1 and const votes2
        //Create a function named totalTally that takes in an object that contains up votes and down votes and returns the total tally of votes
        //Utilize Object.values() to get the number values then .reduce call back function for the return value to subtract last value. 
        //Return the total, or else you'll be undefined...



const totalTally = (object) => Object.values(object).reduce((accumulater, value) => {
    return accumulater - value;
})

console.log(totalTally(votes1))
console.log(totalTally(votes2))
            // const values = Object.values(votes1)
            // console.log(values)
            // const totalTally = Object.value(obj) <- this did not work

    // Jest Test Return PASS  
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.229 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 1.16s.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Test Driven Development
// describe("arrayGlue", () => {
//   it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//     const dataArray1 = ["array", "object", "number", "string", "Boolean"]
//     const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     const combinedDataArrayOutput = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//     expect(arrayGlue(dataArray1, dataArray2)).toEqual(combinedDataArrayOutput)
    
//   })
// })

    // Jest Test RTN:
    // ReferenceError: arrayGlue is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

    // Pseudocode:
        //Paramenter will be two arrays 
        //Argument: const dataArray1 and const dataArray2
        //Create a function named arrayGlue 
        //Utilize .concat to combine the two arrays and filter out any duplicates then returns one array. 
        //Utilizing spread operator syntax (for much needed bonus points ;) this iteralble protocal iterates all elements in both arrays and with the new SetConstructor that builds a new array3 without duplicates.
        //Return the array, or else you'll be undefined...

const arrayGlue = (array1, array2) => {
    (dataArray1).concat(dataArray2)
    array3 = [...new Set([...dataArray1,...dataArray2])]
    return array3
}

console.log(arrayGlue(dataArray1, dataArray2))

    // Jest Test Return PASS
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.201 s, estimated 1 s
    // Ran all test suites.
    // ✨  Done in 0.90s.