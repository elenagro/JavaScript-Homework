
/* Warm up задача: креирајте функција која се вика exclaim. Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. Пример za резултат во конзолата : Javascript!
 */
function exclaim(academy) {
    return `${academy}!`
};
console.log(exclaim("Javascript"));


/* Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
Title -> име на книгата //string
Author -> име на авторот //string
Price -> цена на книгата //number
Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks
*/

var books = [
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 500 },
    { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
    { title: "The Da Vinci Code", author: "Dan Brown", price: 450 },
    { title: "Moscow Does Not Believe in Tears", author: "Valentin Chernykh", price: 299 },
    { title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", price: 250 }

];

var filteredBooks = books.filter(books => {
    return books.price < 400;
});
console.log(filteredBooks);


/* Креирајте функција која се вика CountMs која има еден параметар кој е стринг. Функцијата враќа број, кој кажува колку пати буквата "M" се повторува во тој стринг.
повикувањето би изгледало вака: CountMs("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM");
*/

function CountMs(only) {
    let letterM = 0;
    for (let i = 0; i <= only.length; i++) {
        if (only[i] === "M") {
            letterM++;
        }
    }
    return `The letter 'M' in ${only} is shown ${letterM} times.`;
};
console.log(CountMs("HANMNAJDAMDNMADKASMDNAJHDUAKANCASNKJXA"));


/* Креирајте функција која се вика CountCharacters, која е слична на CountMs. Овој пат, ќе додадете уште еден еден параметар кој ќе каже која буква да ја провери колку пати се повторува во стрингот. (hint за оваа и за третата задача, ако може со length да се провери големината на низата, може и големината на стрингот. Уште еден hint: for loop)
повикувањето би изгледало вака: CountCharacters("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM", "W");
*/

function CountCharacters(string, letterRepeat) {
    let result = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === "W") {
            result++;
        }
    }
    return `Now, the letter ${letterRepeat} in ${string} is shown ${result} times.`;
};
console.log(CountCharacters("KAJWEANFONSALFOENASCOFEWAWWWWWNCSDI", "'W'"));

/* Креирајте функција која се вика LargestNumber. Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа. */


function LargestNumber(numString) {
    var largest = 0;
    for (let i = 0; i < numString.length; i++) {
        if (largest < numString[i]) {
            largest = numString[i];
        }
    }
    return `Number ${largest} is the largest number in this string: ${numString}`;
};

console.log(LargestNumber([26, 89, 105, 10, 690, 45, 2]));