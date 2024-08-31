//Ques 1
// Given an array of numbers, use the map function with an arrow function to square each element of the array
// arr = [1,2,3,4,5,6,7,8];
// let sqre_no = arr.map(num => {
//     return num * num;
// })
// console.log(sqre_no);

//Ques 2
//  Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
// function Marks_(m){

//     m >= 90 ? console.log("A") : 
//     m >=80 && m < 90 ? console.log("B") :
//     m >=70 && m < 80 ? console.log("C") :
//     m >=60 && m < 70 ? console.log("D") :
//     m < 60 ? console.log("F") : console.log("Error")
// }
// Marks_(90);

//Ques 3
// Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// let car = {Comp_Name : "Toyota" , Model : "Innova" , Year : "2017"}
// const year_change = (arr) => {
//     arr.Year = "2020";
// }
// year_change(car);
// const { Model, Year } = car; 
// console.log(Model , Year);

// Ques 4
//  Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// arr = [1,2,3,4,5,6,7,8,9,10];


// let Prime_num = arr.filter(num => {
//     if(num < 2 ){
//         return false;
//     } else { 
//         for(let i = 2; i < num ; i++){
//             if(num % i == 0){
//                 return false;
//             }   
            
//         } return true;
//     }
// })
// console.log(Prime_num)


//Ques 5
// map() => used to apply a function over each element of array 
// filter() => used to filter out values from an array on the basis of a condition
// reduce() => used to shorten out the array 

// Ques 6
// Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
async function Fetch() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data);

}
Fetch()


// Ques 7
// - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// person = {name: "Jack" , age : 26 };
// console.log(person?.contact);


