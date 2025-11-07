// // for (let i = 0; i<= 5; i++) {
// //     console.log("Faizan", i);
    
// // }

// //calculation for loop

// // let sum = 0;
// // let n = 7;
// // for (let i = 0; i<= n; i++) {
// //     sum = sum + i;
// // }
// // console.log("sum "+ sum);

// // while loop 

// // let i = 1;

// // while (i<= 5) {
// //     console.log("Apna College");
// //     i++    
// // }



// // let num = prompt("Enter your number?");

// // for(let i = 0; i<= 10; i++) {
// //     console.log(num + " X " + i + " = " + num* i);
    
// // }


// let num = 25;
// let num1 = prompt("Enter your number?")

// while (num != num1) {
//     num1 = prompt("Enter your Correct number?")  
// }
// console.log("You Win!");


// Arrays in js 

// string inMutable
// Arrays Mutable


// let nam = ["faizan","afzal","farooq","ail"];
// console.log(nam);
// console.log(nam.length);
// console.log(nam[3]= "imran");

// looping over an arrays

// let nam = ["faizan","afzal","farooq","ail"];

// for (let i = 0; i< nam.length; i++) {
//     console.log(nam[i]);
    
// }

//for of 

// for (let element of nam) {
//     console.log(element);
        
// }

// let cities = ["karachi", "lohore","qutta","islamabad","hydarbad"];
// for (let element of cities) {
//     console.log(element.toUpperCase());
// }

// Array practice Question

// let marks = [87,98,54,67,43,57];
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length
// console.log(`avg marks of the class ${avg}`);


//Q2

// let item = [250,645,300,900,50];

// let i = 0;
// for (let val of item) {
//     console.log(`value at index ${i} = ${val}`);
//       let off = val / 10;
//       item[i] = item[i] - off;
//       console.log(`value after offer = ${item[i]}`);
      
//     i++
    
// }
// let item = [250,645,300,900,50];

// for (let index = 0; index < item.length; index++) {
//     let off = item[index] / 10;
//     item[index] -= off;
// }
// console.log(item);


// Arrays methods
// push(): add to end
// pop():delete end & return
// toString():Converts aray to string
// concat(): joins multiple arrays returns result
// unshift(): add to start
// shift(): delete from start & returns
// slice():returns a piece of the array
// splice():change original array (add, romove,erplace)

// let fruits = ["Apple","Banana","Kiwi","Orange","Mango"];
// fruits.pop()// orignal array se delet krta h
// fruits.push("faizan");
// // console.log(fruits.toString());

// let marks = [23,65,76,43,56];
// // console.log(marks.toString());
// let mar = fruits.concat(marks);
// console.log(mar);

// let fruits = ["Apple","Banana","Kiwi","Orange","Mango"];
// fruits.unshift("azfal")
// console.log(fruits );

// let fruits = ["Apple","Banana","Kiwi","Orange","Mango"];
// fruits.shift()
// console.log(fruits );

// let fruits = ["Apple","Banana","Kiwi","Orange","Mango"];
// console.log(fruits.slice(1,4) );

// practice Question
// let fruits = ["Apple","Banana","Kiwi","Orange","Mango"];
// fruits.shift()
// fruits.splice(3,1,"uppe");
// fruits.push("faizan");
// console.log(fruits);






