function sayHello() {
    document.write("Hello js world \n");
    document.write("<br>");
}

function yellsWorld() {
    alert("Hello!");
}



function dieRoll() {
    var num;
    var die;
    num=Math.ceil((Math.random()*7));
    document.write(num);
    document.write("<br>");
    if (num<3) {document.write(num+" is a small number");}
}