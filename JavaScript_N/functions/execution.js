// JavaScript Execution Context  = how js runs a code 

/* 
Global Execution Context = which is reffered by this , and is different in browsers 
Function EC
Eval EC = which is a property of global , so not necessary 


- Memory Creation Phase = memory is allocated 
- Execution Phase 
*/

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
    let total = num1 + num2 ;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/* 
Memory phase --->   (first cycle)
val1 -> undefined 
val2 -> undefined 
addNum -> Definition

result1 -> undefined 
result2 -> undefined 


Execution Phase ---->     (Second Cycle)
val1 -> 10
val2 -> 5

addNum -> (another execution context  --- but it will get deleted later on after completion of the function
            (new variable environment + Execution thread)
            another memory phase for functions 

            Memory phase ---->
            val1 -> undefined 
            val2 -> undefined 
            total -> undefined 


            Execution Phase --->
            num1 -> 10
            num2 -> 5
            total -> 15
            returns the value total in the Global Execution Code )


result1 -> 15

addNum -> (another execution context will be ceated for this function same as before 
            new variable environment + execution thread)

result2 -> 12
*/



// ------------------ call stack ------------------>

// LIFO = last in first out 
