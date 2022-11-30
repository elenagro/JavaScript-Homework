/* 1. Напишете празен p таг во HTML и со помош на Javascript внесете краток Lorem ipsum текст во него. */

var paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?';
console.log(paragraph);

/* 2. Во HTML креирајте копче (-) па потоа span со вредност 0 и уште едно копче (+) --> исто како на сликата
На клик на (-) бројката да се намалува
На клик на (+) бројката да се зголемува
Бројката не смее да отиде под нула и над десет. */

var buttonMinus = document.getElementsByClassName("minus");
var buttonPlus = document.getElementsByClassName("plus");
var counter = document.querySelector("#counter");
var count = 0;

buttonMinus[0].addEventListener("click", function () {
    count -= 1;
    if (count <= 0) {
        count = 0;
    }
    counter.innerHTML = counter;
});

buttonPlus[0].addEventListener("click", function () {
    count += 1;
    if (count >= 10) {
        count = 10;
    }
    counter.innerHTML = count;
});

/*3. Во HTML напишете празна ul (unordered) list --> исто како на сликата
во Javascript пополнете ја со имиња на пет програмски јазици (по избор). */

var progLanguages = document.getElementsByClassName("list-item");

progLanguages[0].innerHTML = "JavaScript";
progLanguages[1].innerHTML = "Java";
progLanguages[2].innerHTML = "Kotlin";
progLanguages[3].innerHTML = "Python";
progLanguages[4].innerHTML = "PHP";

/* Во HTML линкувајте слика со помош на img тагот
на клик на сликата, сменете го src-от во некоја друга слика */

var photo = document.querySelector("#photo");

photo.addEventListener("click", function () {
    photo.src = "https://res.cloudinary.com/ruth-ng/image/upload/v1538323198/befriending-errors-1.png";
});



