const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// const square = numbers.map((num) => {
//   sum = sum + num;

//   return sum / numbers.length;
// });

// console.log(square);

// const score = [10, 20, 30, 40, 50, 20];

// const hightScore = score.filter((score) => score > 30);

// console.log(hightScore);

// const squad = [
//   {
//     name: "John",
//     isHero: true,
//   },
//   {
//     name: "beqa",
//     isHero: true,
//   },
//   {
//     name: "gio",
//     isHero: false,
//   },
//   {
//     name: "levani",
//     isHero: true,
//   },
// ];

// const ishero = squad
//   .filter((squad) => squad.isHero)
//   .map((hero) => `hello ${hero.name}`);

// console.log(ishero);

// const users = [
//   {
//     name: "John",
//     score: 10,
//   },
//   {
//     name: "beqa",
//     score: 20,
//   },
//   {
//     name: "gio",
//     score: 40,
//   },
//   {
//     name: "levani",
//     score: 100,
//   },
// ];

// const passed = users
//   .filter((sc) => sc.score > 30)
//   .map((us) => `dzalian kargi ${us.name}`);
// const notpassed = users
//   .filter((sc) => sc.score < 30)
//   .map((us) => `dzalian cudi ${us.name}`);

// console.log(passed);
// console.log(notpassed);
// console.log(passed);

// const rate = passed.map((pass) => {
//   let grade;
//   if (pass.score > 50) {
//     grade = "dzalian kargi";
//   } else {
//     grade = "nichivo";
//   }

//   return { chemisaxeli: pass.name, shepaseba: grade };
// });

// console.log(rate);

// const myuser = {
//   name: "Giorgi",
//   age: 15,
//   Email: "giorgi@example.com",
//   country: "georgia",
// };

// let role = "admin";

// const newUser = { ...myuser, role };

// console.log(newUser);

const squad = [
  {
    name: "John",
    isHero: true,
  },
  {
    name: "beqa",
    isHero: true,
  },
  {
    name: "gio",
    isHero: false,
  },
  {
    name: "levani",
    isHero: true,
  },
];

let status;

const hero = squad.filter((h) => h.isHero);

if (hero) {
  const newStatus = { hero, status };
  console.log(newStatus);
}
