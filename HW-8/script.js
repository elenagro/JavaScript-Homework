/* Повлечете било кој json од ова api:  https://jsonplaceholder.typicode.com/ и испечатете го во конзолата */

fetch("https://jsonplaceholder.typicode.com/users/3")
    .then(result => {
        console.log(result);
        if (result.ok) {
            return result.json();
        } else {
            console.error("Something went wrong.");
        }
    }).then(allRight => {
        console.log(allRight);
    }).catch(mistake => {
        console.log(mistake);
    });

/* Предизвик: Повлечете ги првите сто објекти од https://jsonplaceholder.typicode.com/photos и прикаќете ги во документот (не во конзолата)
-------------------error----------------------------------------------------------------------*/

const first100 = fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
        console.log(res);
        if (res.ok) {
            return res.json();
        }
        else {
            console.error("Something went wrong.");
        }
    }).then(right => {
        for (var i = 0; i < Math.min(first100.length, 100); i++) {
            document.write(right);
        };
    }).catch(err => {
        console.log(err);
    });



