const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}
////////////////////////////////////////////////////////////////
// 1.

function moveLocation(person, newLocation) {
    person.location.city = newLocation.city;
    person.location.state = newLocation.state;
    person.location.zip = newLocation.zip;
}

let nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;


////////////////////////////////////////////////////////////////

//2.
personTwo.location = personOne.location;

let nLocTwo = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

moveLocation(personOne, nLocTwo);

// console.log(personTwo.location.state);

// console.log(personOne.location.state);

//////////////////////////////////////////////////////////////////
// 3.

const personThree = {
    name: {
        first: 'Junior',
        last: 'Timtim'
    },
        age: 0,
        location: personOne.location

};

// console.log(personThree.location)

////////////////////////////////////////////////////////////////
//4. 

personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

const newLocale = Object.assign({}, personThree.location);

personThree.location = newLocale;

personThree.location.city = "Los Angeles";
personThree.location.zip = 90026;

// console.log(personThree);
// console.log(personOne);
// console.log(personTwo);

////////////////////////////////
// 5.

personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

function clonePerson(person) {
    const personCopy = {};

    personCopy.name = {
        first: person.name.first,
        last: person.name.last
    };

    personCopy.age = 0;

    personCopy.location = {
        city: person.location.city,
        state: person.location.state,
        zip: person.location.zip
    };

return personCopy;
} 

const personOneCopy = clonePerson(personOne);


const personTwoCopy = clonePerson(personTwo);


const personThreeCopy = clonePerson(personThree);


let nLocFour = {
    city: 'Buffalo',
    state: 'New Work',
    zip: 14222
}

let nLocFive = {
    city: 'Miami',
    state: 'Florida',
    zip: 33132
}

let nLocSix = {
    city: 'Denver',
    state: 'Colorado',
    zip: 80204
}




moveLocation(personOneCopy, nLocFour)

moveLocation(personTwoCopy, nLocFive)

moveLocation(personThreeCopy, nLocSix)

// console.log(personOne)
// console.log(personOneCopy)
// console.log(personTwo)
// console.log(personTwoCopy)
// console.log(personThree)
// console.log(personThreeCopy)

////////////////////////////////////////////////////////////////
// 6.

const thoughts = {
    allDay: {
        first: 'Yah is Good',
        last: 'All the time'
    },

    midDay: {
        breakfast: 'I want some cereal',
        lunch: 'I want a sandwich',
        dinner: ' I want some pasta'
    },

    endOfDay: 'time to go to bed'
}
    
personOne.thoughts = thoughts
personTwo.thoughts = thoughts
personThree.thoughts = thoughts
personOneCopy.thoughts = thoughts
personTwoCopy.thoughts = thoughts
personThreeCopy.thoughts = thoughts

console.log(personOne)
console.log(personTwo)
console.log(personThree)
console.log(personOneCopy)
console.log(personTwoCopy)
console.log(personThreeCopy)














