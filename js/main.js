//console.log(111)

//function fizzbuzz(){

 //   for (let i = 1; i <= 100; i++){
//        if (i % 3 == 0 && i % 5 == 0)
 //       console.log(i+"Fizz,Buzz");
//        else if (i % 3 == 0)
 ///           console.log(i+"fizz");
//        else if(i % 5 == 0)
 //       console.log(i+"buzz");
 //       else console.log(i);
 //   }
    
//}

//関数化すると、簡単に呼び出して繰り返し利用できる
//fizzbuzz()

//function addition(a,b){
//    let plus = a + b;
//    return plus;
//};

//console.log(addition(10, 20)); // 30
//console.log(addition(30, 20)); // 50
//console.log(addition(10, 90)); // 100

//function howManySeconds(hours) {
//    //Write Your solution Here
//    let howManySeconds = hours*3600;
//    return howManySeconds;
//};

//console.log(howManySeconds(12)); // 43200
//console.log(howManySeconds(8)); // 28800
//console.log(howManySeconds(3)); // 10800

//function convert(minutes){
//    //Write Your solution Here
//    let convert = minutes*60;
//    return convert;
//};

//console.log(convert(30)); // 1800
//console.log(convert(10)); // 600
//console.log(convert(20)); // 1200

//Calculates total points of a team from number of wins(3pts), draws(1pt), and losses(0pt).

//function footballPoints(wins, draws, losses){
//    //Write Your solution Here
//    let footballPoints = wins*3 + draws*1 + losses*0;
//    return footballPoints;
//};
//
//console.log(footballPoints(4, 3, 1)); // 15
//console.log(footballPoints(10, 5, 0)); // 35
//console.log(footballPoints(11, 0, 9)); // 33


//06. Write Function to return first value of an array.
//function getFirstValue(arr) {
//      //Write Your solution Here
//        let first = arr.shift();
//        return first;
//};

//console.log(getFirstValue(["Saab", "Volvo", "BMW"])); // Saab
//console.log(getFirstValue([3, 5, 1])); // 3
//console.log(getFirstValue(['hello', 'world', 'welcome'])); // hello

//07. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

//function addition(num){
//      //Write Your solution Here
//    let add = num + 1;
//    return add;
//};


//console.log(addition(5)); // 6
//console.log(addition(100)); // 101
//console.log(addition(99)); // 100

//08. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

//function lessThan100(a, b){
//    if (a + b < 100){
//        return  true;
//    }
//        else {
//        return  false;
//    }
//};

//console.log(lessThan100(10, 20)); // true
//console.log(lessThan100(50, 60)); // false
//console.log(lessThan100(20, 50)); // true

//09. Create a function that returns true when num1 is equal to num2; otherwise return false.

////function isSameNum(num1, num2){
////      //Write Your solution Here
////    if (num1 == num2){
//        return true;
//    }else{
//        return false;
//    }
//};

//console.log(isSameNum(30, 30)); // true
//console.log(isSameNum(20, 40)); // false
//console.log(isSameNum(50, 50)); // true

//10. Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step.

//function matchHouses(step){
//      //Write Your solution Here
//    if (step > 0){
//        let match = ((step*6)-(step-1));
//    return match
//    }else{
//        let match = 0;
//        return match
//    }
//};

//console.log(matchHouses(5)); // 26
//console.log(matchHouses(0)); // 0
//console.log(matchHouses(10)); // 51

//11. Write function to return the square of a number.
//function squared(a){
//      //Write Your solution Here
// //   let num = a*a;
//    return num;
//};

//console.log(squared(6)); // 36
//console.log(squared(9)); // 81
//console.log(squared(4)); // 16

//05. Write functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

//function bitwiseAND(n1, n2) {
    //Write Your solution Here
//};

//function bitwiseOR(n1, n2) {
    //Write Your solution Here
//};

//function bitwiseXOR(n1, n2) {
    //Write Your solution Here
//};

//console.log(bitwiseAND(10, 20)); // 0
//console.log(bitwiseOR(10, 20)); // 30
//console.log(bitwiseXOR(10, 20)); // 30

//12. Write function to calculate Perimeter of Rectangles
//function findPerimeter(height, width){
//      //Write Your solution Here
//    let calculate = (height+width)*2;
//    return calculate;
//};
//
//console.log(findPerimeter(20, 50)); // 140
//console.log(findPerimeter(80, 30)); // 220
//console.log(findPerimeter(10, 40)); // 100


////13. Add up all the numbers from 1 to the number you passed to the function.

//function addUp(num){
//      //Write Your solution Here
//    let upnum = 0;
//    for (i = 0; i <= num; i++){
//        upnum += i;
//    }
//    return upnum;
//};

//console.log(addUp(10)); // 55
//console.log(addUp(40)); // 820
//console.log(addUp(15)); // 120

//14. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//function profitableGamble(prob, prize, pay){
//      //Write Your solution Here
//        let total = prize*prob;
//        if(total > pay){
//            return true;
//        }else{
//            return false;
//        }
//};

//console.log(profitableGamble(2, 10, 20)); // false
//console.log(profitableGamble(5, 10, 40)); // true
//console.log(profitableGamble(6, 3, 30)); // false

//15. Takes an array of numbers, returns both the minimum and maximum numbers, in that order.
//function minMax(arr){
//      //Write Your solution Here
//    arr.sort(function(a,b){return(a -b)});
//    return [arr[0] ,arr[arr.length-1]];
//};

//console.log(minMax([2, -1, 5])); // [ -1, 5 ]
//console.log(minMax([0, 5, 2])); // [ 0, 5 ]
//console.log(minMax([2, -5, -1])); // [ -5, 2 ]

//21. function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
//function charCount(myChar, str){
//    let a = 0;
//    for (let i = 0; i < str.length; i++) {
//        if (myChar.toLowerCase() === str.toLowerCase()[i]) {
//        a += 1;
//        }
//    }
//    return a
//};

//console.log(charCount("a", "largest")); //1
//console.log(charCount("c", "Chamber of secrets")); // 2
//console.log(charCount("b", "big fat bubble")); //4

//18. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
///より大きな数を返した方の、文字列を返す。
//If f returns the larger number, return the string f.
//If g returns the larger number, return the string g.
//If the functions return the same number, return the string neither.

function whichIsLarger(f, g){
    //Write Your solution Here
        if( f() > g()){
            return 'f';
        }else if (g() > f()){
            return 'g';
        }else if(f() == g()){
            return 'neither';
        }
};

console.log(whichIsLarger(() => 25, () => 15)); // f
console.log(whichIsLarger(() => 25, () => 25)); // neither
console.log(whichIsLarger(() => 25,  () => 50)); // g


//22. function that takes two parameters and repeats the string n number of times.
//ｎ回、文字を繰り返す

//console.log(StringUtils.repeat('zim', 5));
//console.log(StringUtils.repeat('zoy', 2));
//console.log(StringUtils.repeat('akib', 7));

function repetition(txt, n){
    //Write Your solution Here
    let repeattxt = "";
    while (n > 0) {
        repeattxt += txt
        n--;
    }
    return repeattxt;
};

console.log(repetition('zim', 5)); //zimzimzimzimzim
console.log(repetition('zoy', 2)); //zoyzoy
console.log(repetition('akib', 7)); //akibakibakibakibakibakibakib

//23. function that takes an array of non-negative integers and strings and return a new array without the strings.
//整数と文字列の配列の中から、文字列を抜いた新しい配列を返す

//function filterArray(arr){
      //Write Your solution Here
//        let num = arr;
//        let rep = arr.replace(/[^0-9]/g,"");
//        return rep;
//};

function filterArray(arr){
    //Write Your solution Here
        let filternum = arr.filter(function(x){return typeof x === 'number'});
        return filternum;
    };

console.log(filterArray([1, 'z', 4, 5, 'i', 9, 'm'])); //[ 1, 4, 5, 9 ]
console.log(filterArray([8, 'z', 1, '8', 'i', 9, 'm'])); //[ 8, 1, 9 ]
console.log(filterArray([7, '1', 'z', 0, 'i', 9, 'm'])); //[ 7, 0, 9 ]

