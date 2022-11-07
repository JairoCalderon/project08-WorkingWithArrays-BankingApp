'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = (movements) => {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal"

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>   
    <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html)
  })

}

displayMovements(account1.movements);

const calcDisplayBalance = (movements) => {
  const balance = movements.reduce((acc, cur) => {
    return acc + cur
  }, 0)

  labelBalance.textContent = balance
}

calcDisplayBalance(account1.movements);


const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(" ").map(word => word.at(0).toUpperCase()).join("")
  })
}

createUsernames(accounts);














// const displayMovements = (movements) => {
//   containerMovements.innerHTML = "";

//   movements.forEach((mov, i) => {
//     const type = mov > 0 ? "deposit" : "withdrawal"
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>`;

//     containerMovements.insertAdjacentHTML("afterbegin", html)
//   });

//   const balance = movements.reduce((acc, cur, i, arr) => {
//     return acc + cur
//   }, 100)

// };

// const calcDisplaySumary = (acc) => {
//   const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)
//   labelSumIn.textContent = `${incomes}`;

//   const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}`

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       return int >= 1
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}`

// };

// const createUsernames = (accs) => {
//   accs.forEach((acc) => {
//     acc.username = acc.owner.toLowerCase().split(" ").map(name => name.at(0)).join("");
//   })
// };

// createUsernames(accounts);

// // Event Handler
// let currentAccount;

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();

//   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI
//     labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
//     containerApp.getElementsByClassName.opacity = 1,

//       // Clearing the inputs fields
//       inputLoginUsername.value = inputLoginPin.value = ""
//     // Display movements
//     displayMovements(currentAccount.movements)
//     // Display balance

//     // Display summary
//     calcDisplaySumary(currentAccount);
//   }
// })



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// const calcAverageHumanAge = (ages) => {
//   //ANOTHER WAY TO DO THE SAME
//   // const humanAge = []
//   // ages.map((age) => {

//   //   if (age <= 2) {
//   //     humanAge.push(2 * age)
//   //   } else {
//   //     humanAge.push(16 + (4 * age))
//   //   }
//   // })

//   const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + (4 * age))

//   console.log(humanAge);

//   const aboveAge = humanAge.filter(age => age > 18)

//   console.log(aboveAge);

//   const avrgHumanDogAge = (aboveAge.reduce((a, aboveAge) => {
//     return a + aboveAge
//   }, 0)) / aboveAge.length

//   console.log(avrgHumanDogAge);

// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])



// const owners = ["Jonas", "Zach", "Adam", "Martha"]
// console.log(owners.sort());
// console.log(owners);

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ]


// dogs.forEach(dog => dog.recommendedFood = Math.ceil(dog.weight ** 0.75 * 28))

// console.log(dogs);


// dogs.filter(dogs.owners === "Sarah" && dogs.curFood * 1.1 > dogs.recommendedFood ? console.log("Eating too much") : console.log("Eating too little"))

// const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));

// console.log(dogSarah);

// console.log(`Sarah's dog is eatting too ${dogSarah.curFood > dogSarah.recommendedFood * 1.1 ? "much" : "little"}`);

// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// const eating = dogs.map((dog) => {
//   if (dog.curFood > dog.recommendedFood * 1.1) {
//     ownersEatTooMuch.push(dog.owners)
//   } else {
//     ownersEatTooLittle.push(dog.owners)
//   }
// })
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1).map(dog => dog.owners).flat();
// const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood * 1.1).map(dog => dog.owners).flat();

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);


/////////////////////////////////////////////////
//1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);

// console.log(bankDepositSum);

// //2.
// // One way of doing it:
// // const numDeposit1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).length
// const numDeposit1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0)

// console.log(numDeposit1000);

// //3.
// const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//   cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;

//   return sums;
// }, { deposits: 0, withdrawals: 0 })

// console.log(deposits, withdrawals);

// //4.
// const convertTitleCases = (title) => {
//   const exceptions = ["a", "an", "the", "but", "or", "in", "with"];

//   const titleCase = title.toLowerCase().split(" ").map((word) => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//   ).join(" ");

//   return titleCase
// };

// console.log(convertTitleCases("this is a nice title"));
// console.log(convertTitleCases("this is a LONG title but not too long"));
// console.log(convertTitleCases("and here is another title EXAMPLE"));

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

/////////////

// movements.forEach((movement) => {
//   const resposta = movement > 0 ? `Deposit of ${movement}` : movement < 0 ? `Withdraw of ${Math.abs(movement)}` : null;
//   console.log(resposta);
// })

// const euroToUsd = 1.1;
// const movementUSD = movements.map((mov) => {
//   return mov * euroToUsd
// })

// console.log(movementUSD);

const deposits = movements.filter((mov) => {
  return mov > 0
})
const withdrawal = movements.filter((mov) => {
  return mov < 0
})

// console.log(deposits);
// console.log(withdrawal);


////////// CODE CHALLENGE 1 ///////
// const dogsJulia = [3, 5, 2, 12, 17];
// const dogsKate = [4, 1, 15, 6, 3];

// const checkDogs = (juArr, katArr) => {
//   const dogJuliaCopy = juArr.slice(1, -2);

//   const allDogs = [...dogJuliaCopy, ...katArr];
//   allDogs.forEach((dogAge, i) => {
//     console.log(dogAge >= 3 ? `Dog number ${i + 1} is an adult, and is ${dogAge} years old` : `Dog number ${i + 1} is still a puppy`);
//   });
// };

// checkDogs(dogsJulia, dogsKate)
// console.log(dogsJulia);


const balance = movements.reduce((acc, cur, i, arraY) => {
  return acc + cur
}, 0)

console.log(balance);

let newBal = 0
for (const [i, item] of movements.entries()) {
  console.log(`movimentacao ${i + 1}: ${newBal += item}`);
  // newBal += item;
  // console.log(newBal);
}

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc
  } else {
    return mov
  }
}, mov[0])