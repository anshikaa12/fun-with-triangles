var submit = document.querySelector(".angles-btn");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var inp3 = document.querySelector("#inp3");
var res = document.querySelector(".result-angles")


res.style.display = "none";
submit.addEventListener("click", function inputChange() {
    var a = Number(inp1.value);
    var b = Number(inp2.value);
    var c = Number(inp3.value);
    console.log(a + b + c);
    if (a + b + c === 180) {
        res.innerText = "Yes! You can form a triangle.";
        res.style.color = "green";
        res.style.display = "block";
    } else {
        res.innerText = "A triangle cannot be formed.";
        res.style.color = "red";
        res.style.display = "block";
    }
})