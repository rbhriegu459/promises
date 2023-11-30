console.log('person1 : show tickets');
console.log('person2 : show tickets');

const preMovie  = async() => {
    const promiseWifeBringingTics = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn= new Promise((resolve, reject) => resolve('popcorn'));

    const addButter= new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('colddrink'));

    let ticket = await promiseWifeBringingTics;
    
    let [popcorn, butter, coldDrink] = await Promise.all([getPopcorn, addButter, getColdDrinks])

    console.log(`${popcorn}, ${butter}, ${coldDrink}`);
    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4 : show tickets');
console.log('person5 : show tickets');
