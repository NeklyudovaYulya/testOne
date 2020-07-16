var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reverseArr(arr) {
var result = [];
for (var i = arr.length - 1; i >= 0; i--) {
result.push(arr[i]);
}
return result;
}
alert("Task 9 - " + reverseArr(arr));