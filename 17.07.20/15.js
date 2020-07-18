


var arr = [1,2,3];

elem(arr);

function elem(arr){
alert(arr.shift());
if (arr.length != 0){
elem(arr);
}

}
