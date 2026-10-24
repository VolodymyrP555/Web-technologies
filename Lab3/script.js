
(function () {
    var names = [
    "Bill", "John", "Jen", "Jason", "Paul",
    "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"
];

    console.log("ЛАБОРАТОРНА РОБОТА №3");
    console.log("Вибір привітання за першою літерою імені");
    console.log("Якщо ім’я починається з J/j, виводиться Goodbye, інакше — Hello.");

    for (let i = 0; i < names.length; i++) {
        const firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === "j") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    console.log("Додатковий спосіб відбору імен");
    console.log("Критерій: обчислюється сума ASCII-кодів усіх літер імені; вибираються імена, для яких сума перевищує 500.");

    const threshold = 500;

    for (let i = 0; i < names.length; i++) {
        let asciiSum = 0;

        for (let j = 0; j < names[i].length; j++) {
            asciiSum += names[i].charCodeAt(j);
        }

        if (asciiSum > threshold) {
            console.log(names[i] + ": сума ASCII-кодів = " + asciiSum + " — ВІДІБРАНО (більше за " + threshold + ")");
        } else {
            console.log(names[i] + ": сума ASCII-кодів = " + asciiSum + " — не відібрано (не більше за " + threshold + ")");
        }
    }
})();
