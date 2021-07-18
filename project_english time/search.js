// JavaScript code
var queryString = location.search.substring(1);
console.log(queryString);
var y = document.getElementById("list");
var x1 = y.getElementsByClassName('post_A1');
var x2 = y.getElementsByClassName('post_A2');
var x3 = y.getElementsByClassName('post_B1');
var x4 = y.getElementsByClassName('post_B2');
var x_all = Array.prototype.concat.call(x1, x2, x3, x4);
//let x_all = document.getElementsByClassName('post_all');
console.log(x_all[0][0]);
for (j = 0; j < x_all.length; j++){
    for (i = 0; i < x_all[j].length; i++) { 
        x_all[j][i].style.display="none";
    }
}
let determine_level = 0;
if(queryString == "A1"){
    determine_level = 0;
}
else
if(queryString == "A2"){
    determine_level = 1;
}
else
if(queryString == "B1"){
    determine_level = 2;
}
else
if(queryString == "B2"){
    determine_level = 3;
}
else
if(queryString == "all"){
    determine_level = 4;
}
console.log(determine_level);
if(determine_level != 4)
{
    console.log(queryString);
    for (i = 0; i < x_all[determine_level].length; i++) { 
        x_all[determine_level][i].style.display="block";
    }
}
else
{
    for (j = 0; j < x_all.length; j++){
        for (i = 0; i < x_all[j].length; i++) { 
            x_all[j][i].style.display="block";
        }
    }
}
function search_animal() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    var queryString = location.search.substring(1);
    var y = document.getElementById("list");
    var x1 = y.getElementsByClassName('post_A1');
    var x2 = y.getElementsByClassName('post_A2');
    var x3 = y.getElementsByClassName('post_B1');
    var x4 = y.getElementsByClassName('post_B2');
    let x;
    if(queryString == "A1"){
        x = x1;
    }
    if(queryString == "A2"){
        x = x2;
    }
    if(queryString == "B1"){
        x = x3;
    }
    if(queryString == "B2"){
        x = x4;
    }
    if(queryString == "all"){
        x = Array.prototype.concat.call(x1, x2, x3, x4);
        for (j = 0; j < x.length; j++){
            for (i = 0; i < x[j].length; i++) { 
                if (!x[j][i].innerHTML.toLowerCase().includes(input)) {
                    x[j][i].style.display="none";
                }
                else {      
                    x[j][i].style.display="block";  
                }
            }
        }
    }
    else{
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {         
                x[i].style.display="block"; 
            }
        }
    }

    
}
