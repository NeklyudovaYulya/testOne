function inArray(Where, Find)
{
var arrNew = Where.split(' '); 
var res; 
for(var i=0; i<arrNew.length; i++)
{
if(arrNew[i] == Find)
{
res = true;
}
}

if(res == undefined) 
{
res = false;
}
return res;
}

var str = 'функция первым параметром должна принимать текст элемента а вторым - массив в котором делается поиск';

var toSearch = 'массив';

alert("Task 14 - " + inArray(str, toSearch));