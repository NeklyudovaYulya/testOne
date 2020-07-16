function getDivisors(num) {
    var arrDivisors = [];
    for (var i = 1; i <= num; i++) {
    if(num % i == 0) {
    arrDivisors.push(i);
    }
    }
    return arrDivisors;
    }
    alert("Task 12 - " + getDivisors(20));