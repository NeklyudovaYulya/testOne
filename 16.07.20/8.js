function arraySum (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
    return i + 1;
    }
    }
    }
    
    alert("Task 8 - " + arraySum([8, 6, 3, 2, 5]));