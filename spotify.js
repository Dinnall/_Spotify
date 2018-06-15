/*Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/


let a = "good"
let b = "odg"

 const sortByString =(strToSort, sortBy)=>{
   let arrToSort = strToSort.split("");
   let sortedArr = sortBy.split("");
   let resultArr = new Array;
   for (let i = 0; i < sortedArr.length; i++){
     for (let j = 0; j < s.length; j++){
       if (sortedArr[i] === arrToSort[j]){
         resultArr.push(arrToSort[j])
       }
     }
   }
   return resultArr.join("");
 }

sortByString(a, b);


/* Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

*/


const decodeString = (s)=> {
let splitInput = s.split('')
let stack = [];

splitInput.map((ele) => {
if (ele !== ']') {
            stack.push(ele);
        } else {
            let temp = "";
            while (stack[stack.length - 1] !== '[') {
                temp = stack.pop() + temp;
            }
            stack.pop();
            let count = "";
            while (stack.length > 0 && stack[stack.length - 1].match(/[0-9]+/)) {
                count = stack.pop() + count;
            }
            count = parseInt(count);
            let r = "";
            while (count > 0) {
                r += temp ;
                count--;
            }
            stack.push(r);
        }
    }
)
    let result = "";
    while (stack.length > 0) {
        result = stack.pop() + result;
    }
    return result;
};

decodeString("4[ab]")


/* 
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

*/

const changePossibilities =(denominations,amount)=> {
    var storeCents = [];
    for (var i = 0; i <= amount; i++) {
        storeCents[i] = 0;
    }

storeCents[0] = 1;
    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        for (var highTotal = coin; highTotal <= amount; highTotal++) {
            var ramainder = highTotal - coin;

            storeCents[highTotal] += storeCents[ramainder];
        }
    }

    return storeCents[amount];
}

changePossibilities([1, 2, 3],4)


