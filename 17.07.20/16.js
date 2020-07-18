
var num = "102";

function sumDigitsRecursion(num) {
    var arr = String(num).split("");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
    }
    if (sum > 9) {
    sumDigitsRecursion(sum);
    } else {
    alert(sum + "<br>");
    }
    }
