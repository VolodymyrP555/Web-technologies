console.log(`
Лабораторна робота №1 — функція triangle()

Синтаксис:
triangle(значення1, "тип1", значення2, "тип2")

Можливі типи:
  "leg"             — катет
  "hypotenuse"      — гіпотенуза
  "adjacent angle"  — кут, прилеглий до катета
  "opposite angle"  — кут, протилежний до катета
  "angle"           — гострий кут, коли задана гіпотенуза

Приклади:
  triangle(4, "leg", 8, "hypotenuse");
  triangle(8, "hypotenuse", 4, "leg");
  triangle(3, "leg", 4, "leg");
  triangle(5, "hypotenuse", 30, "angle");
  triangle(4, "leg", 30, "adjacent angle");
  triangle(4, "leg", 30, "opposite angle");

Результат:
  c — гіпотенуза
  a, b — катети
  alpha — кут навпроти a
  beta — кут навпроти b

Успішне виконання повертає "success".
Помилки типів/несумісні типи повертають "failed".
Некоректні числові дані повертають повідомлення про помилку.
`);

function triangle(value1, type1, value2, type2) {

    let a;
    let b;
    let c;
    let alpha;
    let beta;

    let types = [
        "leg",
        "hypotenuse",
        "adjacent angle",
        "opposite angle",
        "angle"
    ];

    if (!types.includes(type1)) {
        console.log("Помилка: неправильний перший тип.");
        return "failed";
    }

    if (!types.includes(type2)) {
        console.log("Помилка: неправильний другий тип.");
        return "failed";
    }

    if (typeof value1 !== "number" || typeof value2 !== "number") {
        console.log("Помилка: значення повинні бути числами.");
        return "failed";
    }

    if (!Number.isFinite(value1) || !Number.isFinite(value2)) {
        console.log("Помилка: значення повинні бути коректними числами.");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log("Помилка: значення повинні бути більшими за нуль.");
        return "failed";
    }


    if (type1 === "leg" && type2 === "leg") {

        a = value1;
        b = value2;

        c = Math.sqrt(a * a + b * b);

        alpha = Math.atan(a / b) * 180 / Math.PI;
        beta = 90 - alpha;
    }


    else if (type1 === "hypotenuse" && type2 === "leg") {

        c = value1;
        a = value2;

        if (a >= c) {
            console.log("Помилка: катет повинен бути меншим за гіпотенузу.");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);

        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
    }


    else if (type1 === "leg" && type2 === "hypotenuse") {

        a = value1;
        c = value2;

        if (a >= c) {
            console.log("Помилка: катет повинен бути меншим за гіпотенузу.");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);

        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
    }


    else if (type1 === "leg" && type2 === "adjacent angle") {

        b = value1;
        alpha = value2;

        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: кут повинен бути гострим.");
            return "failed";
        }

        a = b * Math.tan(alpha * Math.PI / 180);

        c = Math.sqrt(a * a + b * b);

        beta = 90 - alpha;
    }


    else if (type1 === "adjacent angle" && type2 === "leg") {

        alpha = value1;
        b = value2;

        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: кут повинен бути гострим.");
            return "failed";
        }

        a = b * Math.tan(alpha * Math.PI / 180);

        c = Math.sqrt(a * a + b * b);

        beta = 90 - alpha;
    }


    else if (type1 === "leg" && type2 === "opposite angle") {

        a = value1;
        alpha = value2;

        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: кут повинен бути гострим.");
            return "failed";
        }

        b = a / Math.tan(alpha * Math.PI / 180);

        c = Math.sqrt(a * a + b * b);

        beta = 90 - alpha;
    }


    else if (type1 === "opposite angle" && type2 === "leg") {

        alpha = value1;
        a = value2;

        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: кут повинен бути гострим.");
            return "failed";
        }

        b = a / Math.tan(alpha * Math.PI / 180);

        c = Math.sqrt(a * a + b * b);

        beta = 90 - alpha;
    }


    else if (type1 === "hypotenuse" && type2 === "angle") {

        c = value1;
        alpha = value2;

        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: кут повинен бути гострим.");
            return "failed";
        }

        a = c * Math.sin(alpha * Math.PI / 180);

        b = c * Math.cos(alpha * Math.PI / 180);

        beta = 90 - alpha;
    }


    else if (type1 === "angle" && type2 === "hypotenuse") {

        alpha = value1;
        c = value2;

        if (alpha <= 0 || alpha >= 90) {
            console.log("Помилка: кут повинен бути гострим.");
            return "failed";
        }

        a = c * Math.sin(alpha * Math.PI / 180);

        b = c * Math.cos(alpha * Math.PI / 180);

        beta = 90 - alpha;
    }


    else {

        console.log("Помилка: така комбінація типів не підтримується.");
        console.log("Перевірте інструкцію на початку консолі.");

        return "failed";
    }


    if (!Number.isFinite(a) ||
        !Number.isFinite(b) ||
        !Number.isFinite(c) ||
        !Number.isFinite(alpha) ||
        !Number.isFinite(beta)) {

        console.log("Помилка під час обчислення.");
        return "failed";
    }


    if (a <= 0 || b <= 0 || c <= 0) {

        console.log("Помилка: отримано некоректні сторони.");
        return "failed";
    }


    if (c <= a || c <= b) {

        console.log("Помилка: гіпотенуза повинна бути найбільшою стороною.");
        return "failed";
    }


    if (alpha <= 0 || alpha >= 90 ||
        beta <= 0 || beta >= 90) {

        console.log("Помилка: кути повинні бути гострими.");
        return "failed";
    }


    console.log("");
    console.log("Результат:");
    console.log("a =", Number(a.toFixed(6)));
    console.log("b =", Number(b.toFixed(6)));
    console.log("c =", Number(c.toFixed(6)));
    console.log("alpha =", Number(alpha.toFixed(6)) + "°");
    console.log("beta =", Number(beta.toFixed(6)) + "°");
    console.log("");

    return "success";
}


window.triangle = triangle;