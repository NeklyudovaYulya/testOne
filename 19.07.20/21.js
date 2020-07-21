function func(){
    var elem = document.getElementsByClassName('zzz');
    for(let i = 0; i < elem.length;i++){
elem[i].innerHTML = i+1;
    }
}