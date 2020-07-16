var arr = [[1, 2, 3], [4, 5], [6]];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
for (var j = 0; j < arr[i].length; j++) {
sum += arr[i][j];
}
}
alert("Task 10 - " + (sum));