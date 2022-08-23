// console.time("Your code took");
// console.log("hello console");
// console.log(4+34);
// console.log(39);
// console.log(true);
// console.log([34,34,32,24.4]);
// console.table({name: 'reman', "marks": 35});
// console.warn("this is warning");
// console.clear();
// console.timeEnd("Your code took");
// console.assert(199<80, "the age greater than 80 is not is not possible");
// console.error("this is error");
/*
this
is 
a
multi 
line 
comment
*/

//🤑 Variables in js

// var, let, const

// var name = "reman";
// var channel;
// channel = "remancodes";
// channel = "remancodes";
// var marks = 34;
// marks = 0;

// console.log(name, channel, marks);

// Rules For Creating Javascript Variables
/*
1. Cannot start with numbers
2. Can Start with letter, Numbers, _, or $
3. Are Case Sensitive
*/

// var city = 'Ktm';

// console.log(city);
// const ownersname = "hari ram";
// ownersname = "Reman";
// console.log(ownersname);

// const fruit = "Mango";
/*

{
    let city  = "Khotang";
    city = "Pokhara"
    // console.log(city);
}
*/
// console.log(city);

// const Arr1 = [12,43,53,34];
// Arr1 = [45,34,3445];
// Arr1.push(45);
// console.log(Arr1);

//🤑 Most Common Programming Case Types:

/*
1. camelCase 
2. snake_case
4. PasalCase
*/

// 🤑Data Types in js
// Primitive Datatype
/*
1. String
2. Number
3. Boolean
4. Null
5. Undefiend
6. Symbol
*/
// Reference Datatype
/*
1. Arrays
2. Object Literals
3. Function
4. Dates
*/

/* Primitive Data Type */

// String
// var name = 'reman';
// console.log("type of name is "+typeof(name));

// Numbers
// let mark = 345.34;
// console.log("type of mark is " + typeof(mark));

// Boolean 
// let isDriver = false;
// console.log("type of isDriver is " + typeof(isDriver));

// Null
// let nullVar = null;
// console.log("type of nullVar is " + typeof(nullVar));

// Undefiend 

// let undef = undefined;
// console.log("type of undef is " + typeof(undef));

/* Reference Data Type */

// Arrays
// var myArr = [1,2,3,4,5, false,'string'];
// console.log("type of myArr is " + typeof(myArr));

// Object Literals
/*
let sMarks = {
    reman: 34,
    harry: 34,
    brakson:34,
    sadrak: 34,
    "Ram Shah": 34
}
*/
// console.log(typeof sMarks);
/*
function findName(){

}
*/

// console.log(typeof findName);

// let date = new Date();
// console.log(typeof date);

// type conversion and 

// let myVar;
// myVar = String(34);
// console.log(myVar, typeof myVar);
// let booleanVar = String(true);
// console.log(booleanVar, typeof booleanVar);

// let d = String(new Date());
// console.log(d, typeof d);
// let arr = String([34,34,24,25]);
// console.log(arr, typeof arr, arr.length);

// let i = 75;
// console.log(i.toString());

// stri = Number("4942");
// stri = Number("34sr");
// stri = Number(false);
// stri = Number([35,45,45,45,34,45]);
// console.log(stri, (typeof stri));

// let number = parseInt('34.34');
// number = Number('34.34')
// number = parseFloat('4.34')
// console.log(number.toFixed(), (typeof(number)));

// type coercion

// let myStr = Number("45");
// let myNum = 34;
// console.log(myStr + myNum);

const myName = "reman";
// const greeting = "Good Morning ";
// console.log(greeting +" "+ name);
// console.log(greeting + myName);
// let html;
/*
html = '<h1> this is heading </h1>
        <p>this is my paragraph</p>';

html = "<h1> this is heading </h1>
        <p>this is my paragraph</p>";
*/
/*
html = "<h1> this is heading </h1>"+
"<p>this is My Paragraph</p>";
*/

// html = html.concat("this", ' str2');
// console.log(html);

// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[3]);
// console.log(html.indexOf('<'));
// console.log(html.indexOf('359'));
// console.log(html.lastIndexOf(">"));
// console.log(html.charAt(3));
// console.log(html.endsWith(' str2'));
// console.log(html.startsWith("<h1>rt"));
// console.log(html.includes("fg "));
// console.log(html.substring(1, 3));
// console.log(html.slice(-4));
// console.log(html.slice(0, 4));
// console.log(html.substring(-1));
// console.log(html.split('> '));
// console.log(html.replace('this', 'it'));
// console.log(html.replaceAll('this', 'it'));
let fruit1 = "Orange\"";
let fruit2 = "Apples"
let myHtml = `Helllo ${myName} 
            <h1>This ' " is heading</h1>
            <p>You like ${fruit1} and ${fruit2}</p>`;
console.log(myHtml);

// document.body.innerHTML = myHtml;