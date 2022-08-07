// Hackni svou budoucnost  - TypeScript - moderní způsob využití Javascriptu
//---------------------------------------------------------------------------------
// VYŘEŠENÉ ÚLOHY

// 5. TypeScript - Procvičování základních datových typů: realitní kancelář
/* Realitní kancelář
Popisujeme dům. Dům má 4 okna, 1 dveře, barva je bílá, výšku má 50 metrů, je nový, má garáž. 
Vaším úkolem je tyto hodnoty zanést do následujícím proměnných a napsat k nim vždy správný datový typ:*/

const windows: number = 4
console.log(windows)
const doors: number = 1
console.log(doors)
const color: string = 'white'
console.log(color)
const height: number = 50
console.log(height)
const isNew: boolean = true
console.log(isNew)
const garage: boolean = true
console.log(garage)

console.log('********************')
/*---------------------------------------------------------
-----------------------------------------------------------*/
//8. Procvičování objektů - dům v realitní kanceláři jako objekt
/* Objekt v realitní kanceláři
Vytvořte objekt s názvem house, který bude obsahovat všechny výše uvedené proměnné. Použijte pro zápis co nejjednodušší způsob (nemusíte specifikovat, jaká proměnná je jaký typ)*/

const house = {
    windows: 4,
    doors: 1,
    color: 'white',
    height: 50,
    isNew: true,
    garage: true
}

console.log(house.windows)
console.log(house.doors)
console.log(house.color)
console.log(house.height)
console.log(house.isNew)
console.log(house.garage)

console.log('********************')
/*---------------------------------------------------------
-----------------------------------------------------------*/
//10. Procvičování - pole klientů v realitní kanceláři
/* Realitní kancelář a pole klientů
Do následujícího objektu máte za úkol přidat dvě pole. 
První bude mít název vipClients a zde budou uloženy firmy, které mají o dům zájem. Firmy budou Build-store, Damage-do, Bum-bum-company.
Druhé pole budou zájemci z řad běžných lidí. Zájemci jsou Daniel Stavitel, Petr Oknokrad a Dana Parketová.
Dále máte do konzole vypsat vždy prvního a posledního z obou dvou polí.*/

const house2 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ['Build - store', 'Damage-do', 'Bum-bum-company'],
    clients: ['Daniel Stavitel', 'Petr Oknokrad', 'Dana Parketová']
}

function logClients(arrayClients: string[]) {
    for (let i = 0; i < arrayClients.length; i++) {
        if (i === 0 || i === (arrayClients.length) - 1) {
            console.log(arrayClients[i])
        }
    }
}

logClients(house2.vipClients)
logClients(house2.clients)

console.log('********************')
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 12. Procvičování - Tuple v realitní kanceláři
/* Oblast domu v realitní kanceláři
Máte realitní kancelář ve městě, které se dělí do pěti částí. Tyto části jsou očíslovány (1 až 5). Každá část se dělí ještě na sever, jih, západ, východ a střed. Přidejte do objektu house tuple s názvem location, které má vždy dva údaje - číslo části a určenou oblast. Tento konkrétní dům bude v 5. části a v jižní oblasti.
Vypište tuple do konzole pomocí console.log a for cyklu*/

const house3: {
    windows: number,
    doors: number,
    color: string,
    height: number,
    isNew: boolean,
    garage: boolean,
    location: [number, string]
} = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    location: [5, 'jih']
}

for (const houseLocation of house3.location) {
    console.log(houseLocation)
}

console.log('********************')
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

enum House_condition { HABITABLE, NORMAL, UNINHABITABLE }

const house4 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    condition: House_condition.UNINHABITABLE
}

console.log(house4.condition)

console.log('********************')
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 20. Procvičování funkcí a výpisu
/* Vezměte si následující objekt, který jsme již dříve vytvořili:
Vaším úkolem je sestrojit funkci, do které když pošlu tento objekt, tak se vypíše věta:
"Tento dům má 4 okna. Počet dveří je 1. Barva domu je bílá. Výška domu je 50 metrů."
Napovím, že obecný předpis funkce bude mít jeden parametr, který si jakýmkoliv způsobem pojmenujete.Až budete funkci volat, tak tam jen za tento parametr dosadíte objekt house.
Pro vypsání věty můžeme z předchozího videa použít buď znaménko plus(+) nebo tzv.template string ${ něco }. Výběr je na vás.*/

const house5 = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50
}

function renderSentence(myObject: { windows: number, doors: number, color: string, height: number }): void {
    console.log(`Tento dům má ${myObject.windows} okna, počet dveří je ${myObject.doors}, barva domu je ${myObject.color}, výška domu je ${myObject.height} metrů. `)
}

renderSentence(house5)

console.log('********************')
/*---------------------------------------------------------
-----------------------------------------------------------*/
// 22. TypeScript - Procvičování funkce jako typ

// A)
function test1(num1: number, num2: number, num3: number) {
    return num1 + num2 + num3
}

// do myFunction1 muzeme ulozit funkci podle nasledujiciho predpisu
let myFunction1: (x: number, y: number, z: number) => number

// do myFunction1 ulozime function test1, test1 musi odpovidat zapisu myFunction1
myFunction1 = test1

// stejnym principem vyresime i nasledujici priklady

//---------------------------------------------------------

// B)
function test2(description: string) {
    return description
}

let myFunction2: (x: string) => string


myFunction2 = test2

//---------------------------------------------------------

// C)
function test3(myString: string, myNumber: number) {
    return myString
}

let myFunction3: (x: string, y: number) => string

myFunction3 = test3

/*---------------------------------------------------------
-----------------------------------------------------------*/
// 42. Objektově orientované programování (OOP) - Procvičování class, objekty, constructor
/* Vytvořte obecný předpis (class) s názvem House. Bude mít vlastnosti street, number, floors. Tyto vlastnosti se budou zadávat již při vytvoření (constructor)
Vytvořte 3 libovolné objekty podle classy a uložte do proměnných. Následně vypište všechny tři ulice, všechna tři čísla a všechna tři podlaží do konzole.*/

class House {
    street: string
    number: number
    floors: number

    constructor(street: string, number: number, floors: number) {
        this.street = street
        this.number = number
        this.floors = floors
    }
}

const firstHouse = new House('Andělova', 33, 5)
const secondHouse = new House('Barákova', 551, 8)
const thirdHouse = new House('Davelská', 78, 2)

function renderHouse(house: { street: string; number: number; floors: number }) {
    console.log('House:')
    for (const property in house) {
        console.log(`${property}: ${house[property]}`);
    }
}

renderHouse(firstHouse)
renderHouse(secondHouse)
renderHouse(thirdHouse)

console.log('********************')
/*---------------------------------------------------------
-----------------------------------------------------------*/

