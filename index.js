"use strict"
// 📋 Énoncé global : La base des héros

// Tu as le tableau suivant à copier/coller dans ton fichier :

const heroes = [
    { name: "Spider-Man", power: 85, universe: "Marvel", isActive: true, isAlien: false },
    { name: "Batman", power: 80, universe: "DC", isActive: false, isAlien: false },
    { name: "Wonder Woman", power: 90, universe: "DC", isActive: true, isAlien: true },
    { name: "Iron Man", power: 88, universe: "Marvel", isActive: true, isAlien: false },
    { name: "Captain Marvel", power: 95, universe: "Marvel", isActive: false, isAlien: true },
    { name: "Flash", power: 78, universe: "DC", isActive: true, isAlien: false },
    { name: "Thor", power: 92, universe: "Marvel", isActive: true, isAlien: true },
    { name: "Green Lantern", power: 83, universe: "DC", isActive: true, isAlien: true },
    { name: "Black Panther", power: 87, universe: "Marvel", isActive: false, isAlien: false },
    { name: "Martian Manhunter", power: 91, universe: "DC", isActive: true, isAlien: true }
];

/*
🧠 Objectif : maîtriser .filter() dans toutes ses formes

🔥 Challenge 1 :
👉 Récupère tous les héros **actifs**.
 */
const activeHeroes = heroes.filter((it) => it.isActive)
console.log("1 - active heroes", activeHeroes)
/*
⚡ Challenge 2 :
👉 Récupère tous les héros de l’univers **Marvel**.
 */
const marvelHeroes = heroes.filter((it) => it.universe == "Marvel")
console.log("2 - Marvel heroes", marvelHeroes)
/*
🧬 Challenge 3 :
👉 Récupère tous les **héros extraterrestres** (`isAlien === true`).
 */
const alienHeroes = heroes.filter((it) => it.isAlien)
console.log("3 - Alien heroes", alienHeroes)
/*
🥊 Challenge 4 :
👉 Récupère tous les héros ayant une puissance **supérieure ou égale à 90**.
 */
const above90PowerHeroes = heroes.filter((it) => it.power >= 90)
console.log("4 - Above 90 power heroes", above90PowerHeroes)
/*
🎭 Challenge 5 :
👉 Récupère tous les **héros humains et actifs**.
*/
const humanAndActiveHeroes = heroes.filter((it) => !it.isAlien && it.isActive)
console.log("5 - Active and human heroes", humanAndActiveHeroes)
/*
🌌 Challenge 6 :
👉 Récupère les **héros actifs de l’univers DC avec une puissance ≥ 85**.
*/
const activeDCHeroesAbove85 = heroes.filter((it) => it.isActive && it.universe == "DC" && it.power >= 85)
console.log("6 - DC heroes with power >= 85", activeDCHeroesAbove85)
/*
💣 Challenge 7 :
👉 Récupère tous les héros **inactifs ET non extraterrestres**.
*/
const inactiveHumanHeroes = heroes.filter((it) => !it.isActive && !it.isAlien)
console.log("7 - inactive human heroes", inactiveHumanHeroes)
/*
🧠 Challenge 8 :
👉 Récupère les héros dont **le nom contient “man”** (insensible à la casse).
*/
const heroesWithNamesIncludingMan = heroes.filter((it) => it.name.toLowerCase().includes("man"))
console.log("8 - heroes with man in name", heroesWithNamesIncludingMan)
/*
(Ex. Spider-Man, Batman, Martian Manhunter…)

🧪 Challenge 9 :
👉 Récupère les héros **dont la puissance est impaire**.
*/
const heroesWithOddPowerValue = heroes.filter((it) => it.power % 2 === 1)
console.log("9 - heroes with odd power value", heroesWithOddPowerValue)
/*
🧞‍♂️ Challenge 10 :
👉 Récupère les **héros dont le nom fait plus de 10 caractères**.
*/
const heroesWithNameLongerThan10 = heroes.filter((it) => it.name.length > 10)
console.log("10 - heroes with name longer than 10 characters", heroesWithNameLongerThan10)