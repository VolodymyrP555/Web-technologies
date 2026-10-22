
console.log("ЛАБОРАТОРНА РОБОТА №2");

const studentName = "Попович Володимир";

const car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 220;
car1.driver = {
    name: studentName,
    category: "C",
    "personal limitations": "No driving at night"
};
car1.tuning = true;
car1["number of accidents"] = 0;
car1.drive = function () {
    console.log("I am not driving at night");
};

console.log("1. car1:", JSON.stringify(car1, null, 2));

const car2 = {
    color: "red",
    maxSpeed: 180,
    driver: {
        name: studentName,
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2,
    drive: function () {
        console.log("I can drive anytime");
    }
};

console.log("2. car2:", JSON.stringify(car2, null, 2));

console.log("3. Методи drive:");
car1.drive();
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function () {
        if (!this.driver) {
            console.log("No driver assigned");
            return;
        }

        let message = "Driver " + this.driver.name;
        message += this.driver.nightDriving
            ? " drives at night"
            : " does not drive at night";
        message += " and has " + this.driver.experience
            + " years of experience";

        console.log(message);
    };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = { name, nightDriving, experience };
};

const truck1 = new Truck("black", 8000, 85, "Volvo", "FH");
const truck2 = new Truck("white", 6500, 92, "MAN", "TGX");

console.log("4. Поїздки вантажівок:");
truck1.trip();
truck1.AssignDriver(studentName, false, 5);
truck2.AssignDriver(studentName, true, 12);
truck1.trip();
truck2.trip();

class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square — квадрат з чотирма рівними сторонами.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a;
    }

    info() {
        console.log("Квадрат:", "сторони =", this.a, this.a, this.a, this.a,
            "| кути = 90°, 90°, 90°, 90°",
            "| периметр =", this.length(), "| площа =", this.square());
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Rectangle — прямокутник з чотирма прямими кутами.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log("Прямокутник:", "сторони =", this.a, this.b, this.a, this.b,
            "| кути = 90°, 90°, 90°, 90°",
            "| периметр =", this.length(), "| площа =", this.square());
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Rhombus — ромб з чотирма рівними сторонами.");
    }

    length() {
        return 4 * this.a;
    }

    square() {
        return this.a * this.a * Math.sin(this.beta * Math.PI / 180);
    }

    info() {
        console.log("Ромб:", "сторони =", this.a, this.a, this.a, this.a,
            "| кути =", this.alpha + "°,", this.beta + "°,",
            this.alpha + "°,", this.beta + "°",
            "| периметр =", this.length(), "| площа =", this.square());
    }

    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get alpha() {
        return this._alpha;
    }

    set alpha(value) {
        this._alpha = value;
    }

    get beta() {
        return this._beta;
    }

    set beta(value) {
        this._beta = value;
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Parallelogram — паралелограм з рівними протилежними сторонами.");
    }

    length() {
        return 2 * (this.a + this.b);
    }

    square() {
        return this.a * this.b * Math.sin(this.beta * Math.PI / 180);
    }

    info() {
        console.log("Паралелограм:", "сторони =", this.a, this.b, this.a, this.b,
            "| кути =", this.alpha + "°,", this.beta + "°,",
            this.alpha + "°,", this.beta + "°",
            "| периметр =", this.length(), "| площа =", this.square());
    }
}

console.log("9. Опис фігур:");
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

console.log("10. Геометричні фігури:");

const square1 = new Square(5);
const rectangle1 = new Rectangle(6, 4);
const rhombus1 = new Rhombus(5, 120, 60);
const parallelogram1 = new Parallelogram(8, 4, 120, 60);

square1.info();
rectangle1.info();
rhombus1.info();
parallelogram1.info();

console.log("11. Getter та setter:");
console.log("Сторона до зміни:", rhombus1.a);
rhombus1.a = 7;
console.log("Сторона після зміни:", rhombus1.a);
console.log("Кути ромба:", rhombus1.alpha, rhombus1.beta);

function Triangular(a = 3, b = 4, c = 5) {
    const [x, y, z] = [a, b, c];
    return { a: x, b: y, c: z };
}

const triangle1 = Triangular();
const triangle2 = Triangular(6, 8, 10);
const triangle3 = Triangular(5, 12, 13);

console.log("12. Трикутники:");
console.log(JSON.stringify(triangle1));
console.log(JSON.stringify(triangle2));
console.log(JSON.stringify(triangle3));

function PiMultiplier(number) {
    return function () {
        return Math.PI * number;
    };
}

console.log("13. Множники числа pi:");
console.log("π * 2 =", PiMultiplier(2)());
console.log("π * 2/3 =", PiMultiplier(2 / 3)());
console.log("π / 2 =", PiMultiplier(1 / 2)());

function Painter(color) {
    return function (object) {
        if (object && "type" in object) {
            console.log(color + ": " + object.type);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

const object2 = {
    type: "Truck",
    "avg speed": 90,
    "load capacity": 2400
};

const object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

console.log("15. Фарбування об'єктів:");

for (const object of [object1, object2, object3]) {
    console.log("Об'єкт:", JSON.stringify(object));
    PaintBlue(object);
    PaintRed(object);
    PaintYellow(object);
}
