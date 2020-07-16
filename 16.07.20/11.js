var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
for (var j = 0; j < arr[i].length; j++) {
for (var k = 0; k < arr[i][j].length; k++) {
sum += arr[i][j][k];
}
}
}
alert("Task 11 - " + (sum));