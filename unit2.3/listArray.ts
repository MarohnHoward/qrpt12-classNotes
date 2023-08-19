let firstList: Array<number> = [];

let secondList: Array<string> = ["thing1", "thing2", "thing3"];

//push adds an into the array 
firstList.push(0);
firstList.push(1);
firstList.push(2); 

console.log(firstList); 
console.log("This should be the end of the second list", secondList.pop()); 
console.log("The remaining items are: " , secondList);
console.log('this should be thing 1 ', secondList[0]);
console.log('this should be thing2', secondList[1]);