var hypoinp1 = document.querySelector("#inph1");
var hypoinp2 = document.querySelector("#inph2");
var sub = document.querySelector(".angles-btn");
var res = document.querySelector(".result-angles")

res.style.display = "none";
sub.addEventListener("click", function hyp() {

    var a = Math.pow(Number(hypoinp1.value), 2);
    var b = Math.pow(Number(hypoinp2.value), 2);
    var c = Math.sqrt(a + b);
    console.log(a);
    console.log(b);
    console.log(c);
    if (c === 0) {
        res.innerText = "Invalid input";
        res.style.color = "red";
        res.style.display = "block";

    } else {
        res.innerText = "C = " + c;
        res.style.color = "green";
        res.style.display = "block";
    }

})
