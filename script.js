// Hackni svou budoucnost  - TypeScript - moderní způsob využití Javascriptu
//---------------------------------------------------------------------------------
// VYŘEŠENÉ ÚLOHY
// 5. TypeScript - Procvičování základních datových typů: realitní kancelář
/* Realitní kancelář
Popisujeme dům. Dům má 4 okna, 1 dveře, barva je bílá, výšku má 50 metrů, je nový, má garáž.
Vaším úkolem je tyto hodnoty zanést do následujícím proměnných a napsat k nim vždy správný datový typ:*/
var windows = 4;
console.log(windows);
var doors = 1;
console.log(doors);
var color = 'white';
console.log(color);
var height = 50;
console.log(height);
var isNew = true;
console.log(isNew);
var garage = true;
console.log(garage);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
//8. Procvičování objektů - dům v realitní kanceláři jako objekt
/* Objekt v realitní kanceláři
Vytvořte objekt s názvem house, který bude obsahovat všechny výše uvedené proměnné. Použijte pro zápis co nejjednodušší způsob (nemusíte specifikovat, jaká proměnná je jaký typ)*/
var house = {
    windows: 4,
    doors: 1,
    color: 'white',
    height: 50,
    isNew: true,
    garage: true
};
console.log(house.windows);
console.log(house.doors);
console.log(house.color);
console.log(house.height);
console.log(house.isNew);
console.log(house.garage);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
//10. Procvičování - pole klientů v realitní kanceláři
/* Realitní kancelář a pole klientů
Do následujícího objektu máte za úkol přidat dvě pole.
První bude mít název vipClients a zde budou uloženy firmy, které mají o dům zájem. Firmy budou Build-store, Damage-do, Bum-bum-company.
Druhé pole budou zájemci z řad běžných lidí. Zájemci jsou Daniel Stavitel, Petr Oknokrad a Dana Parketová.
Dále máte do konzole vypsat vždy prvního a posledního z obou dvou polí.*/
var house2 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ['Build - store', 'Damage-do', 'Bum-bum-company'],
    clients: ['Daniel Stavitel', 'Petr Oknokrad', 'Dana Parketová']
};
function logClients(arrayClients) {
    for (var i = 0; i < arrayClients.length; i++) {
        if (i === 0 || i === (arrayClients.length) - 1) {
            console.log(arrayClients[i]);
        }
    }
}
logClients(house2.vipClients);
logClients(house2.clients);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 12. Procvičování - Tuple v realitní kanceláři
/* Oblast domu v realitní kanceláři
Máte realitní kancelář ve městě, které se dělí do pěti částí. Tyto části jsou očíslovány (1 až 5). Každá část se dělí ještě na sever, jih, západ, východ a střed. Přidejte do objektu house tuple s názvem location, které má vždy dva údaje - číslo části a určenou oblast. Tento konkrétní dům bude v 5. části a v jižní oblasti.
Vypište tuple do konzole pomocí console.log a for cyklu*/
var house3 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    location: [5, 'jih']
};
for (var _i = 0, _a = house3.location; _i < _a.length; _i++) {
    var houseLocation = _a[_i];
    console.log(houseLocation);
}
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 14. Procvičování enum - stav domu v realitní kanceláři 
/* Realitní kancelář a stav domu
Máte následující objekt:
Mimo objekt vytvoříte enum s názvem House_condition (stav domu) a naplníte ho třemi hodnotami:
habitable (obyvatelný),
normal (normální),
uninhabitable (neobyvatelný).
Do objektu house přidáte vlastnost condition a přiřadíte z enum, že je neobyvatelný.
Vypíšte tuto vlastnost do konzole pomocí console.log - do konzole se vypíše jen číslo
*/
var House_condition;
(function (House_condition) {
    House_condition[House_condition["HABITABLE"] = 0] = "HABITABLE";
    House_condition[House_condition["NORMAL"] = 1] = "NORMAL";
    House_condition[House_condition["UNINHABITABLE"] = 2] = "UNINHABITABLE";
})(House_condition || (House_condition = {}));
var house4 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    condition: House_condition.UNINHABITABLE
};
console.log(house4.condition);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 20. Procvičování funkcí a výpisu
/* Vezměte si následující objekt, který jsme již dříve vytvořili:
Vaším úkolem je sestrojit funkci, do které když pošlu tento objekt, tak se vypíše věta:
"Tento dům má 4 okna. Počet dveří je 1. Barva domu je bílá. Výška domu je 50 metrů."
Napovím, že obecný předpis funkce bude mít jeden parametr, který si jakýmkoliv způsobem pojmenujete.Až budete funkci volat, tak tam jen za tento parametr dosadíte objekt house.
Pro vypsání věty můžeme z předchozího videa použít buď znaménko plus(+) nebo tzv.template string ${ něco }. Výběr je na vás.*/
var house5 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50
};
function renderSentence(myObject) {
    console.log("Tento d\u016Fm m\u00E1 ".concat(myObject.windows, " okna, po\u010Det dve\u0159\u00ED je ").concat(myObject.doors, ", barva domu je ").concat(myObject.color, ", v\u00FD\u0161ka domu je ").concat(myObject.height, " metr\u016F. "));
}
renderSentence(house5);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 22. TypeScript - Procvičování funkce jako typ
// A)
function test1(num1, num2, num3) {
    return num1 + num2 + num3;
}
// do myFunction1 muzeme ulozit funkci podle nasledujiciho predpisu
var myFunction1;
// do myFunction1 ulozime function test1, test1 musi odpovidat zapisu myFunction1
myFunction1 = test1;
// stejnym principem vyresime i nasledujici priklady
//---------------------------------------------------------
// B)
function test2(description) {
    return description;
}
var myFunction2;
myFunction2 = test2;
//---------------------------------------------------------
// C)
function test3(myString, myNumber) {
    return myString;
}
var myFunction3;
myFunction3 = test3;
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 42. Objektově orientované programování (OOP) - Procvičování class, objekty, constructor
/* Vytvořte obecný předpis (class) s názvem House. Bude mít vlastnosti street, number, floors. Tyto vlastnosti se budou zadávat již při vytvoření (constructor)
Vytvořte 3 libovolné objekty podle classy a uložte do proměnných. Následně vypište všechny tři ulice, všechna tři čísla a všechna tři podlaží do konzole.*/
var House = /** @class */ (function () {
    function House(street, number, floors) {
        this.street = street;
        this.number = number;
        this.floors = floors;
    }
    return House;
}());
var firstHouse = new House('Andělova', 33, 5);
var secondHouse = new House('Barákova', 551, 8);
var thirdHouse = new House('Davelská', 78, 2);
var renderHouse = function (house) {
    console.log('House:');
    for (var property in house) {
        console.log("".concat(property, ": ").concat(house[property]));
    }
};
renderHouse(firstHouse);
renderHouse(secondHouse);
renderHouse(thirdHouse);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 44. Objektově orientované programování (OOP) - procvičování metod
/* Vytvořte class House, který bude mít vlastnosti street, number, floors, state (state = stav, který bude nový nebo starý). Vytvořte se všemi vlastnosti constructor.
Do classy přidejte metodu describe, která bude vypisovat např. takovýto text: "Jedná se o nový dům. Nachází se v ulici Modrá 26. Má 4 podlaží." Části street, number, floors a state budou doplněny pomocí this a budou u výpisu každého objektu (domu) jiné.
Podle classy vytvoříte tři objekty, u kterých zavoláte metodu describe a vypíšete tři texty do konzole. */
var House2 = /** @class */ (function () {
    function House2(street, number, floors, state) {
        this.street = street;
        this.number = number;
        this.floors = floors;
        this.state = state;
    }
    House2.prototype.describe = function () {
        console.log("Jedn\u00E1 se o ".concat(this.state, " d\u016Fm. Nach\u00E1z\u00ED se v ulici ").concat(this.street, " ").concat(this.number, ". M\u00E1 ").concat(this.floors, " podla\u017E\u00ED."));
    };
    return House2;
}());
var dobevskaHouse2 = new House2('Dobevská', 56, 4, 'nový');
var dolnobrezanskaHouse2 = new House2('Dolnobřežanská', 546, 9, 'starý');
var dostalovaHouse2 = new House2('Dostálova', 451, 2, 'nový');
var renderMyHouse = function (house) {
    house.describe();
};
renderMyHouse(dobevskaHouse2);
renderMyHouse(dolnobrezanskaHouse2);
renderMyHouse(dostalovaHouse2);
console.log('********************');
/*---------------------------------------------------------
-----------------------------------------------------------*/
