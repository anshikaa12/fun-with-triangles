var btn = document.querySelector(".btn");
var quiz = document.querySelector(".form");
var res = document.querySelector(".output");

const answers = ["yes", "yes", "yes", "yes", "isosceles", "30", "5"];

res.style.display = "none";
btn.addEventListener("click", function ans() {
    var score = 0;
    var index = 0;
    const fRes = new FormData(quiz);
    for (let value of fRes.values()) {
        if (value === answers[index]) {
            score++;
            var q = document.querySelector("#ques" + index);
            q.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        } else {
            var q = document.querySelector("#ques" + index);
            q.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        }
        index++;
    }
    res.style.display = "block";
    res.innerText = "Your score is : " + score;

})
