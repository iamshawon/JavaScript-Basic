/* 3. Insert or Remove
============================================*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

// Topic: Insert data
//========================================================
arr.splice(3, 0, 9, 10); // (index, delete number, insert indexes)
console.log(arr);

arr.push(9);
console.log(arr);

arr.unshift(9);
console.log(arr);

// Topic: Replace
//========================================================
arr.splice(4, 1, 44); // (index, delete number, new data)
console.log(arr);

arr[4] = 44;

// Topic: Delete data
//========================================================
arr.splice(3, 1); // (index, delete number)
console.log(arr);

arr[3] = undefined;
console.log(arr);

arr[4] = null;
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
