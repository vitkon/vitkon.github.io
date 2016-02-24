'use strict';
const myBeers = [
    {
        name: 'Doombar',
        category: 'ale',
        origin: 'England',
        volume: 4,
        draft: true
    },
    {
        name: 'Kronenbourg',
        category: 'lager',
        origin: 'France',
        volume: 6.7,
        draft: true
    },
    {
        name: 'Peroni',
        category: 'lager',
        origin: 'Italy',
        volume: 5.1,
        draft: false,
        size: 330
    }
];

// const allDrafts = beers => beers.filter( beer => beer.draft );

// const avgVolumeOfDraftBeer = beers => beers.filter( beer => beer.draft ).reduce( (beer, result) => {
//     console.log(result);
// } )

// console.log(allDrafts(myBeers));

// let draftBeers = [];
// for (let i = 0, beersLength = myBeers.length; i < beersLength; i++) {
//     if (myBeers[i].draft) {
//         draftBeers.push(myBeers[i]);
//     }
// }

//const hasAles = myBeers.some( beer => beer.category === 'ale');

// let hasAles = false;
// for (let i = 0, beersLength = myBeers.length; i < beersLength; i++) {
//     if (myBeers[i].category === 'ale') {
//         hasAles = true;
//         break;
//     }
// }

// console.log(hasAles);
// 
// 

// const avg = (total, count) => total / count;
// const lagers = myBeers.filter( beer => beer.category === 'lager');
// const avgLagerVolume = lagers.reduce(
//     (prev, curr) => (prev + curr.volume), 0
// ) / lagers.length;

// let totalVolume = 0;
// let lagerCount = 0;
// for (let i = 0, beersLength = myBeers.length; i < beersLength; i++) {
//     if (myBeers[i].category === 'lager') {
//         lagerCount++;
//         totalVolume += myBeers[i].volume;
//     }
// }
// const avgLagerVolume = totalVolume / lagerCount;

    // let bottledBeers = [];
    // for (let i = 0, beersLength = myBeers.length; i < beersLength; i++) {
    //     bottledBeers.push({
    //         name: myBeers[i].name,
    //         isBottled: !myBeers[i].draft
    //     });
    // }

// const bottledBeers = myBeers.map( beer => {
//     return {name: beer.name, isBottled: !beer.draft}
// });
// console.log(bottledBeers)

// const multiply = (x, y) => x * y;

// const hundredPercent = multiply.bind(null, 100);

// const calculated = myBeers.map(hundredPercent(beer.volume) );

// console.log(calculated);


// const log = (namespace) => console.log.bind(null, namespace);
// const info = log('INFO:');
// info('this is an extended console.log');


// const getDaysInAMonth = () => {
//     const date = new Date();
//     return date
// }

// console.log(getDaysInAMonth());
// 

const _ = require('lodash');

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;
const shout = _.flow(
    toUpperCase,
    exclaim
);

console.log(shout('moar beer'));


