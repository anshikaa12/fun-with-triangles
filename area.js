var inp1 = document.querySelector("#base1");
var inp2 = document.querySelector("#base2");
var btn1 = document.querySelector("#btn1");
var res1 = document.querySelector("#res1");

res1.style.display = "none";
btn1.addEventListener("click", function first() {
    var c = (1 / 2) * Number(inp1.value) * Number(inp2.value);
    if (c === 0) {
        res1.innerText = "Invalid input";
        res1.style.color = "red";
        res1.style.display = "block";

    } else {
        res1.innerText = "area = " + c;
        res1.style.color = "green";
        res1.style.display = "block";
    }
})

var inp3 = document.querySelector("#base3");
var inp4 = document.querySelector("#base4");
var inp5 = document.querySelector("#base5");
var btn2 = document.querySelector("#btn-2");
var res2 = document.querySelector("#res2");
res2.style.display = "none";
btn2.addEventListener("click", function second() {
    var a = Number(inp3.value);
    var b = Number(inp4.value);
    var c = Number(inp5.value);
    var s = (a + b + c) / 2;

    var area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));

    if (area === 0) {
        res2.innerText = "Invalid input";
        res2.style.color = "red";
        res2.style.display = "block";

    } else {
        res2.innerText = "area = " + area;
        res2.style.color = "green";
        res2.style.display = "block";
    }
})


var inp6 = document.querySelector("#base6");
var inp7 = document.querySelector("#base7");
var inp8 = document.querySelector("#base8");
var btn3 = document.querySelector("#btn-3");
var res3 = document.querySelector("#res3");
res3.style.display = "none";

btn3.addEventListener("click", function third() {
    var a = Number(inp6.value);
    var b = Number(inp7.value);
    var c = Number(inp8.value);
    var ar = (a * b * (Math.sin(c))) / 2;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(ar);
    if (ar === 0) {
        res3.innerText = "Invalid input";
        res3.style.color = "red";
        res3.style.display = "block";

    } else {
        res3.innerText = "area = " + Math.abs(ar);
        res3.style.color = "green";
        res3.style.display = "block";
    }
})
