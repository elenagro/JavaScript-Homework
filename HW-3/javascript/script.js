/* THE HELLO WORLD EXERCISE (if statement)
Create a variable called "code", that will hold a string (for example: "es" or "de" or "en")
Based on the value of the variable "code", output in the console: "Hello World" in the language that the code is written. If it's es, write Hello World in Spanish. If it's de, write it in German... etc. */

var code = "hr";

if (code == "en") {
    console.log("Hello World!");
} else if (code == "it") {
    console.log("Ciao mondo!");
} else if (code == "ru") {
    console.log("Privet myr!");
} else if (code == "hr") {
    console.log("Pozdrav svijete!");
} else {
    console.error("Statement error.");
};

/* SEASONS (if statement)
Check if the season is Autumn, Winter, Spring or Summer. If the user types (via prompt):
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
Output the results in the console */

var month = prompt("Enter the month to check the season: ( Warning: use ONLY capital letters! )");

if (month == "JANUARY" || month == "FEBRUARY" || month == "DECEMBER") {
    console.log("It's winter!");
} else if (month == "MARCH" || month == "APRIL" || month == "MAY") {
    console.log("It's spring!");
} else if (month == "JUNE" || month == "JULY" || month == "AUGUST") {
    console.log("It's summer");
} else if (month == "SEPTEMBER" || month == "OCTOBER" || month == "NOVEMBER") {
    console.log("It's autumn");
} else {
    console.error("Unknown month");
};

/* MUSICIANS (switch statement)
Create a variable called "band_members_num" and store a number from 1 to 10 in it.
Based on the number, output in the console what kind of a music group it is: If the number is 3 the output is "This band is a trio" etc... */

var band_members_num = 8;

switch (band_members_num) {
    case 1:
        console.log("This is a solo band.");
        break;
    case 2:
        console.log("This band is a duo.");
        break;
    case 3:
        console.log("This band is a trio.");
        break;
    case 4:
        console.log("This band is a quartet.");
        break;
    case 5:
        console.log("This band is a quintet.");
        break;
    case 6:
        console.log("This band is an orchestra.");
        break;
    case 7:
        console.log("This band is an orchestra.");
        break;
    case 8:
        console.log("This band is an orchestra.");
        break;
    case 9:
        console.log("This band is an orchestra.");
        break;
    case 10:
        console.log("This band is an orchestra.");
        break;
    default: console.log("Error!")
};


