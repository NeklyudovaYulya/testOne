var str = "var_text_hello";
var str1 = "";
var res = "";
 
 
str1=str.split("_");
 
for (var word in str1) {
    b = str1[word].charAt(0).toUpperCase() + str1[word].slice(1);
    res = res + b;
};

    alert("Task 13 - " + res);